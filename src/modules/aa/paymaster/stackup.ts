import axios from 'axios';
import {Utils as useropUtils} from "userop";
import {AA_CONFIG} from '@config/aa.config'
import localStore from "@utils/localStore";

type VerifyingPaymasterResult = {
    result?: {
        paymasterAndData: string;
        preVerificationGas: string;
        verificationGasLimit: string;
        callGasLimit: string;
    };
    error?: { message: string }
}

// default for stack up
const pmContext = {
    type: "payg"
};

export const getPaymasterMiddleware = (aaConfig: Pick<AA_CONFIG, 'pmUrl'>) => {
    const paymaster = async (ctx: any) => {
        //const chainId = ''
        const api = aaConfig.pmUrl

        ctx.op.verificationGasLimit = BigInt(
            ctx.op.verificationGasLimit
        ) * BigInt(3);

        // get accessToken dynamically
        const accessToken = await localStore.getAccessToken()

        console.log('paymaster accessToken',accessToken)

        if (!accessToken) {
            throw new Error('NOT_LOGIN')
        }

        // todo error handleding
        const ret = await axios.post(api, [
            useropUtils.OpToJSON(ctx.op),
            ctx.entryPoint,
            pmContext,
        ], {
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            }
        })

        const pData = ret.data as VerifyingPaymasterResult

        console.log('pData', pData)

        if (pData?.error) {
            throw pData?.error.message
        } else if (pData.result) {
            ctx.op.paymasterAndData = pData.result.paymasterAndData;
            ctx.op.preVerificationGas = pData.result.preVerificationGas;
            ctx.op.verificationGasLimit = pData.result.verificationGasLimit;
            ctx.op.callGasLimit = pData.result.callGasLimit;
        } else {
            throw new Error('invalid return format')
        }

    }

    return paymaster

}

export default getPaymasterMiddleware