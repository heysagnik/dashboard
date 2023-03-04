import Layout from 'components/DLayout'
import { Box, Heading, Spacer, Tab, TabPanel,TabPanels,TabList, Tabs, Text ,useTabsContext,Button} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useSigninCheck } from 'reactfire'
import { useEffect } from 'react'
import { FiBell, FiShield, FiUser } from 'react-icons/fi'


export default function Index() {
  const router = useRouter()
  const {data:SigninCheckResult}=useSigninCheck();
  useEffect(()=>{
    if(SigninCheckResult?.signedIn===false){
      router.push("/login");
    }
      },[SigninCheckResult?.signedIn,router])
       
  

  return (
    <Layout title='Settings'>
        <Box p={4} textAlign='center'>
            <Tabs colorScheme={'purple'}>
              <TabList>
                <Tab ><FiUser/>Account</Tab>
                <Tab><FiShield/>Security</Tab>
                <Tab><FiBell/>Notifications</Tab>
              </TabList>
            
            <TabPanels>
          
                <TabPanel>
                  <Text as={Heading} align='center' >Account </Text>
                </TabPanel>
                <TabPanel>
                  <Text as={Heading} align='center' >Security </Text>
                </TabPanel>
                <TabPanel>
                  <Text as={Heading} align='center' >Notifications </Text>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </Box>
    </Layout>
    )
}
