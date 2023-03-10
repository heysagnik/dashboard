import Layout from "components/Layout"
import { Box, Button, Flex, Heading, Text,Image, ButtonGroup, Spacer, Tooltip } from '@chakra-ui/react'
import { useUser,useSigninCheck } from "reactfire";
import { useRouter } from "next/router";
import {useEffect} from 'react';
import { FiUpload,FiPlus } from 'react-icons/fi'
import { Loader } from '@saas-ui/react';

export default function DashboardPage() {
  const {data:SigninCheckResult}=useSigninCheck();
  const router = useRouter();
  useEffect(()=>{
  if(SigninCheckResult?.signedIn===false){
    router.push("/login");
  }
    },[SigninCheckResult?.signedIn,router]);


    return (
        <Layout title='Home'>
            <Box p={4} textAlign='center'>
                <Text as={Heading} align='center' >Record a new Video </Text>
                
                <Text align='center' mt={4}>Click the button below to record a new video</Text>
                   
                    <Image src='/empty.png' alt='Record' w='400px' display={'inline-flex'} />
                <Spacer/>
                <ButtonGroup mt={4}>
                <Button  variant={'solid'} rounded='full' colorScheme={'primary'} leftIcon={<FiPlus/>} onClick={()=>router.push('')} disabled>
                    Record
                </Button>
                <Tooltip label="Coming Soon" aria-label="Coming Soon" rounded='1'>
                <Button  variant={'solid'} rounded='full' leftIcon={<FiUpload/>} >
                    Upload
                </Button>
                </Tooltip>
                </ButtonGroup>
            </Box>
        </Layout>
    )
}