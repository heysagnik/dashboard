import Layout from 'components/DLayout'
import { Box, Heading, Text } from '@chakra-ui/react'
import { useUser,useSigninCheck } from "reactfire";
import { useRouter } from "next/router";
import {useEffect} from 'react';

export default function Profile() {
    const {data:SigninCheckResult}=useSigninCheck();
    const router = useRouter();
    useEffect(()=>{
        if(SigninCheckResult?.signedIn===false){
          router.push("/login");
        }
          },[SigninCheckResult?.signedIn])

  return (
    <Layout title='Profile'>
        <Box p={4} textAlign='center'>
            <Text as={Heading} align='center' >Profile </Text>
        </Box>
    </Layout>
    )
}
