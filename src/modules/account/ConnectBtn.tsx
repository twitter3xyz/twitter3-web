'use client'

import {Button} from '@chakra-ui/react'
import {useAAContext } from '@m/account/AAContext'

export const ConnectBtn = () => {

    const { dispatch } = useAAContext()

    const openDialog =()=>{
        dispatch({type:'OPEN_CONNECT_MODAL'})
    }
    return <Button
        colorScheme={'green'}
        bg={'green.400'}
        rounded={'full'}
        px={6}
        onClick={openDialog}
        _hover={{
            bg: 'green.500',
        }}>
        Connect
    </Button>
}

export default ConnectBtn