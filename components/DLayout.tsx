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
  } from "@chakra-ui/react";
import { PersonaAvatar } from "@saas-ui/persona";
import { AppShell } from "@saas-ui/app-shell";
import { ReactNode } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { Divider, Field, FormLayout, Loader, useActivePath } from "@saas-ui/react";
import { useUser } from "reactfire";
import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { useAuth } from "reactfire";
import { FormDialog } from '@saas-ui/modals'


interface LayoutProps {
    title: string;
    children: ReactNode;
  }


  export default function Layout({ title, children }: LayoutProps) {
    const disclosure = useDisclosure();
    const { isOpen, onClose, onOpen } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();
    const router = useRouter();
    const {status, data: user } = useUser();
   
    const auth = useAuth();
    const onSignOutRequested = useCallback(() => {
      return signOut(auth);

    }, [auth]);

    const prof = () => {
      if (status === "loading") {
        return <PersonaAvatar loading="lazy" />;
      }
      if (user) {
        return <PersonaAvatar name={`${user.displayName}`} src={`${user?.photoURL}`} size={'sm'} />;
      }else{
        return <PersonaAvatar size={'sm'} />;
      }
    };

    const onEdit = () => {
      router.push('/settings/profile');
    };

    const onSubmit = async (data: any) => {
      console.log(data);
      disclosure.onClose()

    }



    return (
      <>
        <Head>
          <title>{`${title} | ScreenREC - The All in one screen recorder`}</title>
        </Head>
        <AppShell
          height="100vh"
          navbar={
            <Flex justifyContent="space-between"  py="2" borderBottomWidth="1px" position="sticky">
           
            <Box as="header" px="14">
            <HStack>
              <Image src="/logo.png" alt="logo" h="40px" w="40px" />
              <Heading as="h1" size="md" ml="2">
                ScreenREC
               </Heading>
            </HStack>
            </Box>
            <Spacer />
            <Menu>
                <MenuButton px="2">
                     {prof()}
                </MenuButton>
                
                   
                <MenuList>
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
                    <MenuItem icon ={<FiPlus/>} onClick={() => router.push('/library/new')}> New File</MenuItem>
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
              <SidebarToggleButton />
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
                <NavItem icon={<FiSettings />} onClick={() => router.push('/settings')} isActive={useActivePath('/settings')}>
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
        
          <Box as="main">{children}</Box>
        </AppShell>
      </>
    );
  }
  