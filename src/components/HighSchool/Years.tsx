import { Box, Flex, Stack, HStack, Image, Text } from '@chakra-ui/react';

export function Contents() {
    return(
        <Box w="100%" mt="4rem">
            <Text ml="3rem" color="#c3073F" mb="2rem" fontSize="4rem">Content</Text>
            <Stack ml="3rem" direction="column" w="30%" spacing={40}>
                <Flex w="30rem" h="3rem" background="#4E4E50">
                    <Text ml="3rem" pt="0.5rem" color="#c3073F" fontSize="2rem">HIGH SCHOOL</Text>
                </Flex>
                <Flex w="90vw">
                    <Flex mr="2rem" w="30rem" h="7rem" align="center" justifyContent="center" background="#c3073F">
                        <Text align="center"  color="WHITE" fontSize="3rem">FIRST YEAR</Text>
                    </Flex>
                    <Flex w="70%" h="7rem" align="center" justifyContent="center"  background="white" border="1px solid" borderColor="#c3073F">
                        <Text>OSDAOKÁSDKODSA</Text>
                    </Flex>
                </Flex>
             
            </Stack>
        </Box>
    )
}
