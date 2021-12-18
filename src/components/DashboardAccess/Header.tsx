import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react'
import  Router from 'next/router';
import {FaArrowLeft} from 'react-icons/fa';
import { useAuth } from '../../hooks/useAuth';

import ReactLoading from 'react-loading';


interface HeaderProps {
    urlRedirect: string;
}

export function Header({urlRedirect}: HeaderProps) {
    const { user } = useAuth();
    console.log(user?.photoURL)

    return (
        <Flex w="100%" h="8rem" mt="0" justifyContent="center" background="#950740">
            <Flex w="80%" align="center"  justifyContent="center" mx="auto" >
                <Button  onClick={() => Router.push(`${urlRedirect}`)} border="none" w="8rem" ml="4rem" borderRadius="10px" h="3rem" rightIcon={<FaArrowLeft />} color="#c3073F" >
                        <Text fontSize="1.5rem" color="#c3073F" fontWeight="bold">BACK</Text>
                </Button>
                <Text w="50%" align="right" textAlign="center" fontWeight="bold"  color="white" fontSize="2rem" >Our motto is help people</Text>
                <Text w="40%" align="right" fontWeight="bold" color="white" fontSize="2.5rem" >WEB EDUCATOR</Text>
            </Flex>    
            <Flex align="center" w="50%" justifyContent="center" mx="auto"  >
                {(!user ) 
                    ? <ReactLoading type='balls' color='white' height='100%' width={'16%'} />
                    : 
                    <>
                        <Box>
                            <Text mr="2rem" fontWeight="bold" color="white" fontSize="1.5rem" >{user?.displayName}</Text>
                            <Text mr="2rem" fontWeight="bold" color="white" fontSize="1.5rem" >{user?.email}</Text>
                        </Box>
                        <Box h="3rem" w="2px" background="white" my="auto" />
                        <Avatar borderRadius="45px" h="4.7rem"  pl="2rem" src={user.photoURL}/>

                    </>
                }
            </Flex>
        </Flex>
    )
}
