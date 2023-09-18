'use client'

import  React,{FC, ReactElement, useReducer, ReactNode,useMemo, useContext, useState, useEffect, useCallback} from 'react'
import { ConnectModal } from '@m/account/ConnectModal'
import { Web3AuthNoModal } from "@web3auth/no-modal";
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import {SafeEventEmitterProvider, WALLET_ADAPTERS, CustomChainConfig} from "@web3auth/base";
// import RPC from "@utils/ethersRPC";

const AAContext = React.createContext<any>({})

export const AAContextProvider = ({children}:{children:ReactNode}) => {
    const initalState: any = {
        isConnectModalOpen:false
    }
    const [web3auth, setWeb3auth] = useState<Web3AuthNoModal | null>(null);
    const [provider, setProvider] = useState<SafeEventEmitterProvider | null>(null);

    const chainConfig:CustomChainConfig = {
        chainNamespace: "eip155" ,
        chainId: "0x1",
        rpcTarget: "https://rpc.ankr.com/eth",
        displayName: "Ethereum Mainnet",
        blockExplorer: "https://etherscan.io",
        ticker: "ETH",
        tickerName: "Ethereum",
    };

    const reducer = (state: any, action: any) => {
        switch (action.type) {
            case 'OPEN_CONNECT_MODAL': {
                console.log('OPEN_CONNECT_MODAL')
                return {...state, isConnectModalOpen:true}
            }
            case 'CLOSE_CONNECT_MODAL': {
                console.log('CLOSE_CONNECT_MODAL')
                return {...state, isConnectModalOpen:false}
            }
            default: return {...state}
        }
    }
    const [state, dispatch] = useReducer(reducer, initalState)

    const login = useCallback(async () => {
        console.log('login', web3auth)
        if(web3auth){
            const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
                loginProvider: "twitter",
            });
            setProvider(web3authProvider);
        }
    },[web3auth])

    const getUserInfo = useCallback(async () => {
        const user = await web3auth?.getUserInfo();
        console.log('getUserInfo', user)
    },[web3auth])



    useEffect(() => {
        const init = async () => {
            try {
                const web3auth = new Web3AuthNoModal({
                    clientId: process.env.NEXT_PUBLIC_WEB3AUTH_CLIENT_ID || '',
                    chainConfig,
                });

                const privateKeyProvider = new EthereumPrivateKeyProvider({ config: { chainConfig } });

                const openloginAdapter = new OpenloginAdapter({
                    privateKeyProvider,
                });
                web3auth.configureAdapter(openloginAdapter);

                setWeb3auth(web3auth);

                await web3auth.init();

                console.log('after web3auth init')

            }catch (error) {
                console.error(error);
            }
        };
        init();
    }, []);

    const contextValue = useMemo(
        () => ({
            state,
            dispatch,
            login,
            getUserInfo
        }),
        [state, dispatch, login, getUserInfo]
    );

    return <AAContext.Provider  value={contextValue}>
        {children}
        <ConnectModal />
    </AAContext.Provider>
}

export const useAAContext = () => useContext(AAContext);
