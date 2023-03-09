import { useState } from "react";
import { useRouter } from "next/router";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Heading } from "@chakra-ui/react";
import Layout from "components/Layout";
import { AccountSettings } from "components/settings/account";
import { NotificationSettings } from "components/settings/notification";

const SettingsPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [currentTab, setCurrentTab] = useState(slug || "account" || "notifications" || "integrations");

  const handleTabChange = (tab: string) => {
    setCurrentTab(tab);
    router.push(`/settings/${tab}`);
  };


  
 
  return (
    <Layout title="Settings">
      
      <Tabs colorScheme={'purple'} >
        <TabList mb="4">
          <Tab onClick={() => handleTabChange("account")} >
            Account
          </Tab>
          <Tab onClick={() => handleTabChange("notifications")} >
            Notifications
          </Tab>
          <Tab onClick={() => handleTabChange("integrations")} >
            Integrations
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <AccountSettings />
            {/* Your profile settings form goes here */}
          </TabPanel>
          <TabPanel>
           <NotificationSettings/>
            {/* Your security settings form goes here */}
          </TabPanel>
          <TabPanel>
            
            {/* Your notification settings form goes here */}
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Layout>
  );
};

export default SettingsPage;