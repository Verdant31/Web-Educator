//Chakra-ui
import { Box, Flex, Stack, HStack, Image, Text, Button } from '@chakra-ui/react';

//Components
import { Content } from './Contents';


export function HighSchoolContent() {
    return(
        <Box w="100%" mt="4rem" mb="15rem">
            <Text ml="3rem" mr="3rem" color="#c3073F" mb="2rem" fontSize="4rem">Content</Text>
            <Stack ml="3rem" direction="column" w="30%" spacing={40}>
                <Flex w="90vw">
                    <Flex w="30rem"mr="2rem"  h="4rem" background="#4E4E50">
                        <Text ml="3rem" pt="0.5rem" fontWeight="BOLD" color="#c3073F" fontSize="2rem">HIGH SCHOOL</Text>
                    </Flex>
                    <Flex w="70%" h="4rem" background="#4E4E50">
                        <Text ml="3rem" pt="0.5rem" fontWeight="BOLD" color="#c3073F" fontSize="2rem">CONTENTS</Text>
                    </Flex>
                </Flex>
                <Flex  w="90vw">
                    <Content year="first" />
                </Flex>
            </Stack>
        </Box>
    )
}
