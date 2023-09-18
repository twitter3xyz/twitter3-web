'use client'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button
} from '@chakra-ui/react'
import {useAAContext } from '@m/account/AAContext'

export const ConnectModal = () => {

    const { state, dispatch, login } = useAAContext()
    console.log('state',state)

    const onClose =()=>{
        dispatch({type:'CLOSE_CONNECT_MODAL'})
        console.log('state',state)
    }

     return (<>
         <Modal isOpen={state.isConnectModalOpen} onClose={onClose}>
             <ModalOverlay />
             <ModalContent>
                 <ModalHeader>Connect</ModalHeader>
                 <ModalCloseButton />
                 <ModalBody>
                     <Button
                         colorScheme={'green'}
                         bg={'green.400'}
                         rounded={'full'}
                         px={6}
                         onClick={login}
                         _hover={{
                             bg: 'green.500',
                         }}>
                         Connect With twitter
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