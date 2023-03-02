import {
    NavGroup,
    NavItem,
    Sidebar,
    SidebarOverlay,
    SidebarSection,
    SidebarToggleButton,
  } from "@saas-ui/sidebar";
  import { FiHome, FiFolder, FiSettings, FiUsers, FiUser, FiLogOut, FiHelpCircle, FiSun, FiMoon } from "react-icons/fi";
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
  } from "@chakra-ui/react";
  import { PersonaAvatar } from "@saas-ui/persona";
  import { AppShell } from "@saas-ui/app-shell";
  import { ReactNode } from "react";
  import Head from "next/head";
  import { useRouter } from "next/router";
import { Loader, useActivePath } from "@saas-ui/react";
import { useUser } from "reactfire";
import { signOut } from "firebase/auth";
import { useCallback } from "react";
import { useAuth } from "reactfire";


interface LayoutProps {
    title: string;
    children: ReactNode;
  }


  export default function Layout({ title, children }: LayoutProps) {
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
        return <Loader />;
      }
      if (user) {
        return <PersonaAvatar name={`${user.displayName}`} size={'sm'} />;
      }else{
        return <PersonaAvatar size={'sm'} />;
      }
    };

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
                    <MenuItem icon={<FiUser/>}>Profile</MenuItem>
                    <MenuItem icon={<FiSettings/>}> Settings</MenuItem>
                    <MenuItem  icon={colorMode === 'light' ? <FiMoon /> : <FiSun/>} onClick={toggleColorMode}>{colorMode ==='light'? 'Dark Mode':'Light Mode'}</MenuItem>
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
                <NavItem icon={<FiSettings />} onClick={() => router.push('/settings')} isActive={useActivePath('/settings/')}>
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
  