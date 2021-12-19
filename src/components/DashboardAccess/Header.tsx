//Chakra-ui
import { Box, Button, Flex, Text, Avatar} from '@chakra-ui/react';

//Router
import  Router from 'next/router';

//React-icons
import {FaArrowLeft} from 'react-icons/fa';

//Hooks
import { useAuth } from '../../hooks/useAuth';

//React loading
import ReactLoading from 'react-loading';


interface HeaderProps {
    urlRedirect: string;
}

export function Header({urlRedirect}: HeaderProps) {
    const { user } = useAuth();
    return (
        <Flex w="100%" h="8rem" mt="0" justifyContent="center" background="#950740">
            <Flex w="80%" align="center"  justifyContent="center" mx="auto" >
                <Button background="none" onClick={() => Router.push(`${urlRedirect}`)} border="none" rightIcon={<FaArrowLeft color="white" size={40} />} >
                </Button>
                <Text w="50%" align="right" textAlign="center" fontWeight="bold"  color="white" fontSize="2rem" >Our motto is help people</Text>
                <Text w="40%" align="right" fontWeight="bold" color="white" fontSize="2.5rem" >WEB EDUCATOR</Text>
            </Flex>    
            <Flex align="center" w="50%" justifyContent="center" mx="auto"  >
                {(!user) 
                    ? <ReactLoading type='balls' color='white' height='100%' width={'16%'} />
                    : 
                    <>
                        <Box>
                            <Text mr="2rem" fontWeight="bold" color="white" fontSize="1.5rem" >{user?.displayName}</Text>
                            <Text mr="2rem" fontWeight="bold" color="white" fontSize="1.5rem" >{user?.email}</Text>
                        </Box>
                        <Box h="3rem" w="2px" background="white" my="auto" />
                        {(user.photoURL!== null)
                            ? <Avatar borderRadius="45px" h="4.7rem"  pl="2rem" src={user.photoURL}/>
                            : <h1>asdkopadsopk</h1>
                        }

                    </>
                }
            </Flex>
        </Flex>
    )
}
