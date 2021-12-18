import { Flex, Stack, Text } from '@chakra-ui/react';

interface ContentProps {
    year: string;
}

export function Content({year} : ContentProps) {
    return (
        <>
            <Flex mr="2rem" w="30rem" h="9rem" align="center" justifyContent="center" background="#c3073F">
                <Text align="center"  color="WHITE" fontSize="3rem">{year} YEAR</Text>
            </Flex>
            <Flex w="70%" h="9rem" align="center" justifyContent="center"  background="white" border="1px solid" borderColor="#c3073F">
                <Stack direction="row" spacing="100">
                <Stack direction="column" spacing="15">
                    <Text as="a" color="#c7073f" fontWeight="bold" fontSize="1.5rem">🌍 BIOLOGIA</Text>
                    <Text as="a" color="#c7073f" fontWeight="bold" fontSize="1.5rem">🔢 MATEMÁTICA</Text>
                </Stack>
                <Stack direction="column" spacing="15">
                    <Text as="a" color="#c7073f" fontWeight="bold" fontSize="1.5rem">📚 HISTÓRIA</Text>
                    <Text color="#c7073f" fontWeight="bold" fontSize="1.5rem">🧠 SOCIOLOGIA</Text>
                </Stack>
      
                <Stack direction="column" spacing="15">
                    <Text as="a" color="#c7073f" fontWeight="bold" fontSize="1.5rem">👓 FILOSOFIA</Text>
                    <Text as="a" color="#c7073f" fontWeight="bold" fontSize="1.5rem">⚛️ FISICA</Text>
                </Stack>
                <Stack direction="column" spacing="15">
                    <Text as="a" color="#c7073f" fontWeight="bold" fontSize="1.5rem">🧪 QUIMICA</Text>
                    <Text as="a" color="#c7073f" fontWeight="bold" fontSize="1.5rem">✍ PORTUGUÊS</Text>
                </Stack>
                </Stack>
            </Flex>
        </> 
    )  
}
