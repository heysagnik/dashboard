import AppShell from 'components/AppShell'
import { Box, Button, Heading, Spacer, Text } from '@chakra-ui/react'

export default function Index() {
  return (
    <AppShell title='Settings'>
        <Box p={4} textAlign='center'>
            <Text as={Heading} align='center' >Settings </Text>
             <Spacer/>
            <Button as='a' colorScheme={'purple'} href='/settings/profile' rounded={'full'} >View Profile</Button>
        </Box>
    </AppShell>
    )
}
