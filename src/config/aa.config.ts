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

export const baseGoerliSimple: AA_CONFIG = {
    chain: 'base-goerli',
    rpcUrl: 'https://api.stackup.sh/v1/node/d5b65989c1368c11888bfb8efee23e90673e84620954c3c5a6226c01fd87852c',
    pmUrl: 'http://localhost:4000/paymaster',
    entryPoint: '0x5FF137D4b0FDCD49DcA30c7CF57E578a026d2789',
    accountFactory: '0x9406Cc6185a346906296840746125a0E44976454',
}
baseGoerliSimple.paymaster = getPaymasterMiddleware({pmUrl: baseGoerliSimple.pmUrl})

const configMap: CONFIG_MAP =
    {
        baseGoerliSimple
    }

export default configMap
