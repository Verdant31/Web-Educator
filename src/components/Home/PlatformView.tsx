import { Box, Flex, Text } from '@chakra-ui/react';
import { SchoolGrid } from './SchoolGrid';


export function PlatformView() {
    return (
        <Box align="center" mt="8rem">
            <Text  color="#4E4E50" fontWeight="bold" fontSize="2rem">CHECKOUT THE PREVIEW OF OUR PLATFORM</Text>
            <Box width="50rem" height="90rem" borderRadius="25px" background="white" mt="4rem">
                <Flex   h="5rem" width="100%" borderTopRadius="25px" background="#C3073F">
                    <Text my="auto" mx="auto" fontWeight="bold" fontSize="2rem" color="white">WEB EDUCATOR</Text>
                </Flex >
               <SchoolGrid isDisabled={true} title="MIDDLE SCHOOL" image="whitechildrenstudying.jpg"/>
               <SchoolGrid isDisabled={true} title="HIGH SCHOOL" image="boystudying.png"/>
            </Box>
        </Box>
    )
}
