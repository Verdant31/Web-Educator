import { Header } from '../../components/DashboardAccess/Header';
import { Box, Flex, Stack, HStack, Image, Text } from '@chakra-ui/react';
import { HighSchoolContent } from '../../components/HighSchool/HighSchoolContent';

export default function HighSchool() {
    return(
        <>
            <Header urlRedirect='/DashboardAccess'/>
            <HighSchoolContent />
        </>
    )
}
