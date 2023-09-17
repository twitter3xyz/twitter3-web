'use client'

import  React,{FC, ReactElement, useReducer, ReactNode,useMemo, useContext, useState} from 'react'
import { ConnectModal } from '@m/account/ConnectModal'

const AAContext = React.createContext<any>({})


export const AAContextProvider = ({children}:{children:ReactNode}) => {
    const initalState: any = {
        isConnectModalOpen:false
    }

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

    const contextValue = useMemo(
        () => ({
            state,
            dispatch,
        }),
        [state, dispatch]
    );

    return <AAContext.Provider  value={contextValue}>
        {children}
        <ConnectModal />
    </AAContext.Provider>
}

export const useAAContext = () => useContext(AAContext);
