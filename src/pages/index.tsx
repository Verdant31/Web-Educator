import { Box } from '@chakra-ui/react';
import { AccessPlatform } from '../components/Home/AccessPlatform';
import { PlatformView } from '../components/Home/PlatformView';
import { Resume } from '../components/Home/Resume';

export default function Home() {
  return (
    <Box marginBottom="20rem">
      <Resume />
      <PlatformView />
      <AccessPlatform />
    </Box>
  )
}
