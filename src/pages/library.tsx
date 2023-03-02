import Layout from 'components/DLayout'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useUser,useSigninCheck } from "reactfire";
import { useRouter } from "next/router";


export default function Index() {
    const {data:SigninCheckResult}=useSigninCheck();
    const router = useRouter();
    if(SigninCheckResult?.signedIn===false){
        router.push("/login");
    }
        
  return (
    <Layout title='Library'>
        <Box p={4} textAlign='center'>
            <Text as={Heading} align='center' >Library </Text>
        </Box>
    </Layout>
    )
}
