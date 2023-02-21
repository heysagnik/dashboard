import AppShell from 'components/AppShell'
import { Box, Heading, Text } from '@chakra-ui/react'

export default function Index() {
  return (
    <AppShell title='Library'>
        <Box p={4} textAlign='center'>
            <Text as={Heading} align='center' >Library </Text>
        </Box>
    </AppShell>
    )
}
