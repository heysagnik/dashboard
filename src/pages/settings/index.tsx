import AppShell from 'components/AppShell'
import { Box, Button, Heading, Text } from '@chakra-ui/react'

export default function Index() {
  return (
    <AppShell title='Settings'>
        <Box p={4} textAlign='center'>
            <Text as={Heading} align='center' >Settings </Text>
            <Button as='a' colorScheme={'purple'} href='/settings/profile' >View Profile</Button>
        </Box>
    </AppShell>
    )
}
