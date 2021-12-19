//Chakra-ui
import { Box, Flex, Image, Text, Button } from '@chakra-ui/react';

//Router
import Router from 'next/router';

interface SchoolGridProps {
    title: string;
    image: string;
    href?: string;
    isDisabled?: boolean;
}

export function SchoolGrid({
    title, image, href, isDisabled
} : SchoolGridProps) {
    return(
        <Box >
            <Text pt="1.5rem" pb="1.5rem"  fontWeight="bold" fontSize="2rem" color="#950740"> {title}</Text>
            <Box mb="4rem" pos="relative" width="30rem"  borderRadius="25px" height="30rem" border="4px solid" borderColor="#950740" >
                <Image  src={image} borderTopRadius="25px" w="80%" h="18rem" mt="2rem"  alt="Kids studying"/>
                
                <Flex pos="absolute" bottom="-2" alignSelf="bottom" width="100%" background="#950740" height="5rem" borderBottomRadius="22px">
                    <Button  disabled={isDisabled} onClick={() => Router.push(`${href}`)} background="none" border="none" cursor="pointer" outline="inherit" mx="auto" my="auto" fontSize="2rem" fontWeight="bold" color="white">SEE CONTENT</Button>
                </Flex>
            </Box>
        </Box>
    )
}
