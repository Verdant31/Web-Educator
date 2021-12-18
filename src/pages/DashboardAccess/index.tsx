import { Flex, HStack, Text } from '@chakra-ui/react';
import { Header } from '../../components/DashboardAccess/Header';
import { SchoolGrid } from '../../components/Home/SchoolGrid';


export default function Dashboard() {
  
    return (
        <>
        <Header urlRedirect='/'/>
        <Text  mt="4rem" fontSize="3rem" color="white" fontWeight="bold" align="center">THE FUTURE OF EDUCATION.</Text>
        <Flex justifyContent="center" textAlign="center">
        <HStack mt="4rem" spacing="10rem">
            <SchoolGrid  href="/MiddleSchool" title="MIDDLE SCHOOL" image="childrenstudying.jpg"/>
            <SchoolGrid  href="/HighSchool" title="HIGH SCHOOL" image="boystudying.png"/>
        </HStack>
        </Flex>
    </>
    )
}
