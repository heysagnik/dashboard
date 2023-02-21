import AppShell from 'components/AppShell'
import { Box, Button, Flex, Heading, Text,Image, ButtonGroup, Spacer } from '@chakra-ui/react'
import { FiUpload,FiPlus } from 'react-icons/fi'

export default function Index() {
  return (
  <AppShell title='Home'>
    <Box p={4} textAlign='center'>
      <Text as={Heading} align='center' >Record a New Video </Text>
       <Image src='/empty.png' alt='Record' w='400px' display={'inline-flex'}/>
      <Spacer/>
      <ButtonGroup mt={4}>
      <Button  variant={'solid'} rounded='full'colorScheme={'purple'} leftIcon={<FiPlus/>}>
        Record
      </Button>
      <Button  variant={'solid'} rounded='full'colorScheme={'purple'} leftIcon={<FiUpload/>} disabled>
        Upload
      </Button>
      </ButtonGroup>
    </Box>
  </AppShell>
  )

}