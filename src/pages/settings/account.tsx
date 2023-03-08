import Layout from 'components/Layout'
import { Box, Heading, Spacer, Tab, TabPanel,TabPanels,TabList, Tabs,useTabsContext,Button, Stack,Text, FormControl, FormLabel, Input, HStack,} from '@chakra-ui/react'
import { useUser,useSigninCheck } from "reactfire";
import { useRouter } from "next/router";
import {useEffect, useState} from 'react';
import { Divider, PersonaAvatar,Card, CardBody,CardFooter, Persona, FormLayout,Form,Field} from '@saas-ui/react';


export default function AccountPage() {
    const {data:SigninCheckResult}=useSigninCheck();
    const onSubmit = (params: any) => {
      console.log(params)
      return new Promise((resolve) => {
        setTimeout(resolve, 1000)
      })
    }
    const router = useRouter();
    const [selectedTab, setSelectedTab] = useState(0);
    const handleTabChange = (index: number) => {
      // Update the route based on the selected tab
      if (index === 0) {
        router.push("/settings/account");
      } else if (index === 1) {
        router.push("/settings/integration");
      } else if (index === 2) {
        router.push("/settings/notification");
      }
    };

    useEffect(()=>{
        if(SigninCheckResult?.signedIn===false){
          router.push("/login");
        }
          },[SigninCheckResult?.signedIn,router])

          useEffect(() => {
            const pathname = router.pathname;
            // Update the selected tab based on the current route
            if (pathname === "/settings/account") {
              setSelectedTab(0);
            } else if (pathname === "/settings/integration") {
              setSelectedTab(1);
            } else if (pathname === "/settings/notification") {
              setSelectedTab(2);
            }
          }, [router.pathname]);

  return (
    <Layout title='Integration'>
       <Box p={4} textAlign='center'>
       <Tabs colorScheme={'purple'} index={selectedTab} onChange={handleTabChange}>
              <TabList>
                <Tab >Account</Tab>
                <Tab>Integrations</Tab>
                <Tab>Notifications</Tab>
              </TabList>
            
            <TabPanels>
          
                <TabPanel zIndex={'-1'}>
                 

                </TabPanel>
                <TabPanel>
                  <Text as={Heading} align='center' >Integrations</Text>
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
