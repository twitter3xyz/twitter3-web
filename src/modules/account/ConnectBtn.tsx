'use client'

import {Button} from '@chakra-ui/react'
import {useAAContext } from '@m/account/AAContext'

export const ConnectBtn = () => {

    const { dispatch } = useAAContext()

    const openDialog =()=>{
        dispatch({type:'OPEN_CONNECT_MODAL'})
    }
    return <Button
        colorScheme={'white'}
        bg={'black'}
        rounded={'full'}
        px={6}
        onClick={openDialog}
        _hover={{
            bg: 'grey.300',
        }}>
        Connect
    </Button>
}

export default ConnectBtn