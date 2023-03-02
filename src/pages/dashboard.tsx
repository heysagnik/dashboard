import Layout from "components/DLayout";
import { Box, Button, Flex, Heading, Text,Image, ButtonGroup, Spacer } from '@chakra-ui/react'
import { useUser,useSigninCheck } from "reactfire";
import { useRouter } from "next/router";
import { FiUpload,FiPlus } from 'react-icons/fi'

export default function DashboardPage() {
  const {data:SigninCheckResult}=useSigninCheck();
  const router = useRouter();
  if(SigninCheckResult?.signedIn===false){
    router.push("/login");
  }
    return (
        <Layout title='Home'>
            <Box p={4} textAlign='center'>
                <Text as={Heading} align='center' >Record a new Video </Text>
                
                <Text align='center' mt={4}>Click the button below to record a new video</Text>
                    <Image src='/empty.png' alt='Record' w='400px' display={'inline-flex'}/>
                <Spacer/>
                <ButtonGroup mt={4}>
                <Button  variant={'solid'} rounded='full'colorScheme={'purple'} leftIcon={<FiPlus/>} disabled>
                    Record
                </Button>
                <Button  variant={'solid'} rounded='full' leftIcon={<FiUpload/>} disabled>
                    Upload
                </Button>
                </ButtonGroup>
            </Box>
        </Layout>
    )
}