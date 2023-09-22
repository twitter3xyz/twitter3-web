import {UserOperationMiddlewareFn} from "userop";
import getPaymasterMiddleware from '@m/aa/paymaster/stackup'

export type AA_CONFIG = {
    chain: string
    rpcUrl: string
    pmUrl: string
    entryPoint: string
    accountFactory: string
    paymaster?: UserOperationMiddlewareFn
}

export type CONFIG_MAP = {
    [key: string]: AA_CONFIG
}

export const lineaGoerliSimple: AA_CONFIG = {
    chain: 'linea-goerli',
    rpcUrl: process.env.NEXT_PUBLIC_RPC_LINEA_GOERLI as string,
    pmUrl: process.env.NEXT_PUBLIC_PM_LINEA_GOERLI as string,
    entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
    accountFactory: '0x9406Cc6185a346906296840746125a0E44976454',
}
lineaGoerliSimple.paymaster = getPaymasterMiddleware({pmUrl: lineaGoerliSimple.pmUrl})

const configMap: CONFIG_MAP =
    {
        lineaGoerliSimple
    }

export default configMap
