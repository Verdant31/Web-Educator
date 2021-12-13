import { Box, Flex, Text } from '@chakra-ui/react';
import { Avatar } from '@chakra-ui/react'
export function Header() {
    return (
        <Flex w="100%" h="6rem" mt="0" justifyContent="center" background="#950740">
            <Flex w="80%" justifyContent="center" mx="auto" >
                <Text w="50%" align="right" fontWeight="bold" color="white" fontSize="2.5rem" pt="1.5rem">Our motto is help people</Text>
                <Text w="40%" align="right" fontWeight="bold" color="white" fontSize="2.5rem" pt="1.5rem">WEB EDUCATOR</Text>
            </Flex>    
            <Flex w="50%" justifyContent="center" mx="auto"  >
                <Box>
                    <Text mr="2rem" fontWeight="bold" color="white" fontSize="1.5rem" pt="1.2rem">João Pedro Piovesan</Text>
                    <Text mr="2rem" fontWeight="bold" color="white" fontSize="1.5rem" >verdantxd@gmail.com</Text>
                </Box>
                <Box h="3rem" w="2px" background="white" my="auto"/>
                <Avatar borderRadius="45px" h="4.7rem" pt="0.7rem" pl="2rem" src="https://lh3.googleusercontent.com/a-/AOh14GhYibUm4vay49DioXKsY1l0pkaS7n6svslTMMq9=s288-p-rw-no"/>
            </Flex>
        </Flex>
    )
}
