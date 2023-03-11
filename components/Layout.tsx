import {
    NavGroup,
    NavItem,
    Sidebar,
    SidebarOverlay,
    SidebarSection,
    SidebarToggleButton,
   
  } from "@saas-ui/sidebar";
  import { FiHome, FiFolder, FiSettings, FiUsers, FiUser, FiLogOut, FiHelpCircle, FiSun, FiMoon, FiEdit, FiMessageCircle, FiPlus } from "react-icons/fi";
  import {
    Image,
    Spacer,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
    Box,
    Heading,
    Flex,
    useDisclosure,
    HStack,
    useColorMode,
    Text,
    Button,
    Badge,
  } from "@chakra-ui/react";
import { PersonaAvatar } from "@saas-ui/persona";
import { AppShell } from "@saas-ui/app-shell";
import { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Divider, Field, FormLayout, Loader, SearchInput, useActivePath } from "@saas-ui/react";
import { useUser } from "reactfire";
import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { useAuth } from "reactfire";
import { FormDialog } from '@saas-ui/modals'
import { useState,useEffect } from "react";


interface LayoutProps {
    title: string;
    children: ReactNode;
  }

  const Logo = () => (
    <Box display="inline-flex" alignItems="center">
    <Image
      src="/logo.png"
      alt="ScreenREC"
      width="40px"
      height="auto"
      display="inline-flex"
    />
    <Text  align='center' >Capture <Badge variant='outline' rounded={'full'} textTransform="lowercase" colorScheme={'purple'}>&alpha;</Badge></Text>
    </Box>
  );



  export default function Layout({ title, children }: LayoutProps) {
    const [value, setValue] = useState('');
    const disclosure = useDisclosure();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();
    const {status, data: user } = useUser();
   
    const auth = useAuth();
    const onSignOutRequested = useCallback(() => {
      return signOut(auth);

    }, [auth]);

    const onEdit = () => {
      router.push('/settings/account');
    };

    const onSubmit = async (data: any) => {
      console.log(data);
      disclosure.onClose()
    }
    const [isLoading, setLoading] = useState(false)

    return (
      <>
        <Head>
          <title>{`${title} | ScreenREC - The All in one screen recorder`}</title>
        </Head>
        <AppShell
          height="100vh"
          navbar={
            <Flex justifyContent="space-between"  borderBottomWidth="1px"  position="sticky">
              <Box ml="2" px='10' py='2'>
                <Logo />
              </Box>
         
           <Menu >
               <MenuButton px="4">
                  <PersonaAvatar name={`${user?.displayName}`} src={`${user?.photoURL}`} size={'sm'} />
               </MenuButton>
               
                  
               <MenuList zIndex={'+3'}>
                   <MenuItem >
                           <HStack>
                               <PersonaAvatar src={`${user?.photoURL}`} name={`${user?.displayName}`} size={'sm'}  />
                               <Box>
                                   <Text size="sm" ml="2">
                                       {user?.displayName}
                                   </Text>
                                   <Text as="h3" size="xs" ml="2">
                                       {user?.email}
                                   </Text>
                               </Box>
                               
                               <IconButton aria-label="Edit" icon={<FiEdit/>} rounded={'full'}  size='sm' onClick={onEdit}/>

                           </HStack>
                   </MenuItem>
                   <Divider/>
                   <MenuItem icon ={<FiPlus/>} onClick={() => router.push('/library')}> New File</MenuItem>
                   <MenuItem icon={<FiSettings/>}> Settings</MenuItem>
                   <Divider/>
                   <MenuItem icon={<FiMessageCircle/>} onClick={() => disclosure.onOpen()}> Feedback</MenuItem>
                   <FormDialog title="Feedback" {...disclosure} onSubmit={onSubmit}>
                     <FormLayout>
                       <Field 
                           name="title"
                           label="Title"
                           type="text"
                           rules={{ required: 'Title is required' }}
                           autoFocus
                         />
                         <Field name="description" type="textarea" label="Description" />
                     </FormLayout>
                       
                   </FormDialog>
                   <MenuItem icon={<FiHelpCircle/>}> Help</MenuItem>
                   <MenuItem  icon={colorMode === 'light' ? <FiMoon /> : <FiSun/>} onClick={toggleColorMode}>{colorMode ==='light'? 'Dark Mode':'Light Mode'}</MenuItem>
                   <Divider/>
                   <MenuItem icon={<FiLogOut/>} onClick={onSignOutRequested}>Logout</MenuItem>
               </MenuList>
           </Menu>

           
           </Flex>
          }
          sidebar={
            <Sidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
              <SidebarToggleButton position={'sticky'}/>
            
              <SidebarSection direction="row">
                <Spacer />
              </SidebarSection>
              <SidebarSection aria-label="Main">
                <NavItem icon={<FiHome />} onClick={() => router.push('/dashboard')} isActive={useActivePath('/dashboard')}>
                  Home
                </NavItem>
              </SidebarSection>
                <SidebarSection aria-label="Secondary">
                <NavItem icon={<FiFolder />} onClick={() => router.push('/library')} isActive={useActivePath('/library')}>
                    Files
                </NavItem>
                <NavItem icon={<FiSettings />} onClick={() => router.push('/settings/account')} isActive={router.pathname.startsWith('/settings')?true:false}>
                    Settings
                </NavItem>
                </SidebarSection>
                <Spacer/>
                <SidebarSection aria-label="Footer">
                    <NavGroup title="Help">
                        <NavItem icon={<FiUsers />} href="">
                            Support
                        </NavItem>
                        <NavItem icon={<FiHelpCircle />} href="">
                            Help
                        </NavItem>
                    </NavGroup>
                </SidebarSection>
                <SidebarOverlay />

            </Sidebar>
          }
        >
        
          <Box as="main">
          
           <Loader variant="fullscreen" isLoading={isLoading} />

            {children}
            </Box>
        </AppShell>
      </>
    );
  }
  