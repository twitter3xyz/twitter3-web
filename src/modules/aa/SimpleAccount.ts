import {Client, Presets} from "userop";
import {Wallet, getAddress, parseEther} from "ethers";

import {AA_CONFIG} from '@config/aa.config'

class SimpleAccount {

    private acc: any
    // @ts-ignore
    private config: AA_CONFIG

    async init(privateKey: string, aaConfig: AA_CONFIG) {
        this.config = aaConfig

        // create paymaster

        const acc = await Presets.Builder.SimpleAccount.init(
            new Wallet(privateKey) as any,
            aaConfig.rpcUrl,
            {
                entryPoint: aaConfig.entryPoint,
                factory: aaConfig.accountFactory,
                paymasterMiddleware: aaConfig.paymaster
            }
        );
        this.acc = acc
    }

    async transferNative(recipient: string, amount: string) {
        const client = await Client.init(this.config.rpcUrl, {entryPoint: this.config.entryPoint});
        const target = getAddress(recipient);
        const value = parseEther(amount);

        try{
            const res = await client.sendUserOperation(
                this.acc.execute(target, value, "0x"),
                {
                    onBuild: async (op) => {
                        console.log(`Signed UserOperation: `);
                        console.log(JSON.stringify(op, null, 2) as any);
                    },
                }
            );
            console.log(`UserOpHash: ${res.userOpHash}`);

            console.log("Waiting for transaction...");
            const ev = await res.wait();
            console.log(`Transaction hash: ${ev?.transactionHash ?? null}`);
            return ev
        }catch (e){
            console.log(e)
        }
    }

    async transferErc20() {
        console.log('transferErc20')
    }

    async checkIfSponsered():Promise<boolean>{
        return true
    }


    async sendTransaction() {

    }

}

export default SimpleAccount