//Chakra-ui
import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';

export function Resume() {
    return (
        <Box textAlign="center" mt="4rem">
            <Text fontSize="2rem" fontWeight="700" color="#C3073F">WEB EDUCATOR</Text>
            <Box width="40rem" color="white" mx="auto">
            <Text mt="40" fontSize="2.5rem">
                With the arrive of the pandemic(COVID-19), the inequality
                of access to education was increased, and thats worrisome.
            </Text>
            </Box>
            <Flex justifyContent="center" mt="10rem">
                <HStack spacing="10rem">
                    <Image w="30rem" h="20rem" src="books.png" alt="Stacked Books"/>
                    <Image w="30rem" h="20rem" src="notebook.png" alt="Notebook"/>
                </HStack>
            </Flex>
            <Box width="40rem" color="white" mx="auto" mt="10rem">
            <Text mt="40" fontSize="2.5rem">
                The Web Educator comes with the goal of 
                improve this situation, bringing a platform
                with access to indispensable contents to an
                scholar formation, with no cost.
            </Text>
            </Box>
        </Box>
    )
}
