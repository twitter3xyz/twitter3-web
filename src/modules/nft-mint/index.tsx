'use client'

import {
    Box,
    Button,
    Center,
    Heading,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure
} from '@chakra-ui/react'
import {useAAContext} from '@m/account/AAContext'

export default function NFTMintPage() {
    const {isOpen, onOpen, onClose} = useDisclosure()

    const {state} = useAAContext()

    // const test =async ()=>{
    //     console.log('hello',state)
    //     await state.accounts.baseGoerliSimple?.transferNative('0x6161380587233D9b2D7b82aE506FA79181B42Bdf','0')
    // }

    const IMAGE =
'https://assets.onchainsummer.xyz/Final_Art-Fini.png'
    return <>

        <Center py={12}>
            <Box
                role={'group'}
                p={6}
                maxW={'330px'}
                w={'full'}
                bg={useColorModeValue('white', 'gray.800')}
                boxShadow={'2xl'}
                rounded={'lg'}
                pos={'relative'}
                zIndex={1}>
                <Box
                    rounded={'lg'}
                    mt={-12}
                    pos={'relative'}
                    height={'230px'}
                    _after={{
                        transition: 'all .3s ease',
                        content: '""',
                        w: 'full',
                        h: 'full',
                        pos: 'absolute',
                        top: 5,
                        left: 0,
                        backgroundImage: `url(${IMAGE})`,
                        filter: 'blur(15px)',
                        zIndex: -1,
                    }}
                    _groupHover={{
                        _after: {
                            filter: 'blur(20px)',
                        },
                    }}>
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={IMAGE}
                        alt="#"
                    />
                </Box>
                <Stack pt={10} align={'center'}>
                    <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                        Brand
                    </Text>
                    <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                        Nice Chair, pink
                    </Heading>
                    <Stack direction={'row'} align={'center'}>
                        {/*<Text fontWeight={800} fontSize={'xl'}>*/}
                        {/*    $57*/}
                        {/*</Text>*/}
                        {/*<Text textDecoration={'line-through'} color={'gray.600'}>*/}
                        {/*    $199*/}
                        {/*</Text>*/}
                        <Button
                            colorScheme={'white'}
                            bg={'black'}
                            rounded={'full'}
                            px={6}
                            onClick={onOpen}
                            _hover={{
                                bg: 'grey.500',
                            }}
                        > mint</Button>
                    </Stack>
                </Stack>
            </Box>
        </Center>


        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay/>
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                    {/*<Lorem count={2} />*/}
                    <Image
                        rounded={'lg'}
                        height={230}
                        width={282}
                        objectFit={'cover'}
                        src={IMAGE}
                        alt="#"
                    />
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme={'white'}
                            bg={'black'}
                            rounded={'full'}
                            px={6}
                            _hover={{
                                bg: 'grey.500',
                            }}
                            mr={3}
                            onClick={onClose}>
                        Mint
                    </Button>
                    {/*<Button variant='ghost'>Secondary Action</Button>*/}
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

