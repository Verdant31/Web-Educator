//Chakra-ui
import { Box, Text, Button, Stack } from '@chakra-ui/react';

//Router
import Router from 'next/router';

//Hooks
import { useAuth } from '../../hooks/useAuth';

export function AccessPlatform() {
    const { signInWithGoogle } = useAuth(); 

    return (
        <Box mt="10rem" align="center">
            <Stack spacing="6rem" align="center" direction="column" width="50%">
            <Text  fontWeight="bold" color="#4e4e50" fontSize="3rem">
                A POINT THAT IS WORTH HIGHLIGHT IN OUR PLATFORM:
                ALL THE CONTENTS ARE ALSO ACCESSIBLES IN OFFLINE
                MODE, WITHOUT THE NEED OF INTERNET ACCESS.
            </Text>

            <Button onClick={() => signInWithGoogle()} background="white"  h="6rem"  width="30rem" borderRadius="20px" >
                <Text  fontSize="2rem" fontWeight="bold" color="#C3073F">ACCESS PLATFORM</Text>
            </Button>

            <Text fontWeight="bold" fontSize="3rem" color="#C3073F">
                GIVE US THE OPPORTUNITY TO CONTRIBUTE
                EVERY DAY A LITTLE MORE TO THE EDUCATION.
            </Text>
            </Stack>
        </Box>
    )
}
