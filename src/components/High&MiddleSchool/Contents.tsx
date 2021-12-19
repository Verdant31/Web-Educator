//Chakra-ui
import { Flex, Stack, Text } from '@chakra-ui/react';

//Link next
import Link from 'next/link';

interface ContentProps {
    year: string;
}

export function Content({year} : ContentProps) {
    return (
        <>
            <Flex mr="2rem" w="30rem" h="9rem" align="center" justifyContent="center" background="#c3073F">
                <Text align="center"  color="WHITE" fontSize="3rem">{year.toUpperCase()} YEAR</Text>
            </Flex>
            <Flex w="70%" h="9rem" align="center" justifyContent="center"  background="white" border="1px solid" borderColor="#c3073F">
                <Stack direction="row" spacing="80">

                <Stack direction="column" spacing="15">
                    <Link  passHref href={`/Content/${year}-biology`} ><Text color="#c7073f" fontWeight="bold" fontSize="1.3rem">🌍 BIOLOGY</Text></Link>
                    <Link passHref href={`/Content/${year}-math`} ><Text color="#c7073f" fontWeight="bold" fontSize="1.3rem">🔢 MATH</Text></Link>
                </Stack>

                <Stack direction="column" spacing="15">
                    <Link passHref href={`/Content/${year}-history`} ><Text color="#c7073f" fontWeight="bold" fontSize="1.3rem">📚 HISTORY</Text></Link>
                    <Link passHref href={`/Content/${year}-sociology`} ><Text color="#c7073f" fontWeight="bold" fontSize="1.3rem">🧠 SOCIOLOGY</Text></Link>
                </Stack>
      
                <Stack direction="column" spacing={"15"}>
                    <Link passHref href={`/Content/${year}-philosophy`} ><Text color="#c7073f" fontWeight="bold" fontSize="1.3rem">👓 PHILOSOPHY</Text></Link>
                    <Link passHref href={`/Content/${year}-physics`} ><Text color="#c7073f" fontWeight="bold" fontSize="1.3rem">⚛️ PHYSICS</Text></Link>
                </Stack>

                <Stack direction="column" spacing="15">
                    <Link passHref href={`/Content/${year}-chemistry`} ><Text color="#c7073f" fontWeight="bold" fontSize="1.3rem">🧪 CHEMISTRY</Text></Link>
                    <Link passHref href={`/Content/${year}-geography`} ><Text color="#c7073f" fontWeight="bold" fontSize="1.3rem">🗺️ GEOGRAPHY</Text></Link>
                </Stack>
                </Stack>
            </Flex>
        </>    
        )  
}
