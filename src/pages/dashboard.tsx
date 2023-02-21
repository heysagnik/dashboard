import AppShell from 'components/AppShell'
import { Box, Button, Flex, Heading, Text,Image, ButtonGroup, Spacer } from '@chakra-ui/react'

export default function Index() {
  return (
  <AppShell title='Home'>
    <Box p={4} textAlign='center'>
      <Text as={Heading} align='center' >Record a New Video </Text>
       <Image src='https://cdn.loom.com/assets/[1]/library-empty-state-099b9b7945d18abb085b9a4da88ba3b3.png' alt='Record' w='400px' display={'inline-flex'}/>
      <Spacer/>
      <ButtonGroup mt={4}>
      <Button  variant={'solid'} rounded='full'colorScheme={'purple'} >
        Record
      </Button>
      <Button  variant={'solid'} rounded='full'colorScheme={'purple'} >
        Upload
      </Button>
      </ButtonGroup>
    </Box>
  </AppShell>
  )

}