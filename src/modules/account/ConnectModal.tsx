'use client'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Center,
    Text
} from '@chakra-ui/react'
import { FaSquareTwitter, FaTwitter } from "react-icons/fa6";

import {useAAContext } from '@m/account/AAContext'


export const ConnectModal = () => {

    const { state, dispatch, login } = useAAContext()
    console.log('state',state)

    const onClose =()=>{
        dispatch({type:'CLOSE_CONNECT_MODAL'})
        console.log('state',state)
    }

     return (<>
         <Modal isOpen={state.isConnectModalOpen}
                onClose={onClose}
                motionPreset='slideInBottom'
                isCentered
         >
             <ModalOverlay />
             <ModalContent>
                 <ModalHeader> <Center>Connect</Center></ModalHeader>
                 <ModalCloseButton />
                 <ModalBody>
                     <Button
                         size='md'
                         colorScheme={'black'}
                         rounded={'full'}
                         variant={'outline'}
                         w={'full'}
                         px={6}
                         onClick={login}
                         leftIcon={<FaTwitter color={'twitter.600'}  />}
                         >
                         <Center>
                             <Text>Sign in with Twitter</Text>
                         </Center>
                     </Button>
                 </ModalBody>

                 <ModalFooter>
                     {/*<Button colorScheme='blue' mr={3} onClick={onClose}>*/}
                     {/*    Close*/}
                     {/*</Button>*/}
                     {/*<Button variant='ghost'>Secondary Action</Button>*/}
                 </ModalFooter>
             </ModalContent>
         </Modal>
     </>)

}