'use client'

import {Button} from '@chakra-ui/react'
import {useAAContext } from '@m/account/AAContext'
import {baseGoerliSimple} from "@config/aa.config";

export default function NFTMintPage() {

    const { state} = useAAContext()

    const test =async ()=>{
        console.log('hello',state)
        await state.accounts.baseGoerliSimple?.transferNative('0x6161380587233D9b2D7b82aE506FA79181B42Bdf','0')
    }
    return <div>
        <Button
            colorScheme={'green'}
            bg={'green.400'}
            rounded={'full'}
            px={6}
            onClick={test}
            _hover={{
                bg: 'green.500',
            }}
        >test mint</Button>
    </div>
}

