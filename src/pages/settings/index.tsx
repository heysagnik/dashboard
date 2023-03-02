import Layout from 'components/DLayout'
import { Box, Button, Heading, Spacer, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSigninCheck } from 'reactfire'

export default function Index() {
  const router = useRouter()
  const {data:SigninCheckResult}=useSigninCheck();
    if(SigninCheckResult?.signedIn===false){
        router.push("/login");
    }
 
       

  return (
    <Layout title='Settings'>
        <Box p={4} textAlign='center'>
            <Text as={Heading} align='center' >Settings </Text>
             <Spacer/>
            <Button as='a' colorScheme={'purple'} onClick={()=> router.push('/settings/profile')} rounded={'full'} >View Profile</Button>
        </Box>
    </Layout>
    )
}
