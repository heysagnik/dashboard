import {
  Avatar,
  Box,
  Flex,
  Icon,
  Text,
  Stack,
  HStack,
  Image,
  Button,
  Heading,
  BoxProps,
  Drawer,
  DrawerContent,
  IconButton,
  useDisclosure,
  DrawerOverlay,
  useColorModeValue,
  Link,
  DrawerCloseButton,
  Menu,
  MenuList,
  MenuButton,
  VStack,
  MenuItem,
  MenuDivider,
  Input,
  InputGroup,
  InputLeftElement,
  

} from '@chakra-ui/react';

import { FiMenu,FiHome,FiSettings,FiBell,FiSearch,  FiFolder } from 'react-icons/fi';

import { ReactNode } from 'react';
import Head from 'next/head';


interface AppShellProps {
  children: ReactNode;
   title: string;
}


export default function AppShell({ title,children }: AppShellProps) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  

  return (
    <>
    <Head>
      <title>{title} | ScreenREC - The All in one screen recorder</title>
      <link rel="icon" href="/favicon.ico" />

    </Head>
    <Box as="section" bg={useColorModeValue('gray.50', 'gray.700')} minH="100vh" >
      <SidebarContent display={{ base: 'none', md: 'unset' }} />
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <SidebarContent w="full" borderRight="none" />
        </DrawerContent>
      </Drawer>
      <Box ml={{ base: 0, md: 60 }} transition=".3s ease">
        <Flex
          as="header"
          align="center"
          justify={{ base: 'space-between', md: 'flex-end' }}
          w="full"
          px="4"
          borderBottomWidth="1px"
          borderColor={useColorModeValue('inherit', 'gray.700')}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow="sm"
          h="14"
        >
          <IconButton
            aria-label="Menu"
            display={{ base: 'inline-flex', md: 'none' }}
            onClick={onOpen}
            icon={<FiMenu />}
            size="md"
          />
       <HStack spacing={{ base: '0.2', md: '6' }} >
       <InputGroup  >
         <Input
            maxW="25rem"
            placeholder="Search..."
            borderColor={useColorModeValue('gray.300', 'white')}
            borderRadius="5px"
            
            _placeholder={{ color: 'gray.500' }}
            _focus={{ borderColor: 'gray.500' }}
            rounded="full"
            bg={useColorModeValue('gray.100', 'gray.700')}
            color={useColorModeValue('gray.700', 'gray.200')}
           />
           <InputLeftElement >
               <FiSearch/>
           </InputLeftElement>
        </InputGroup>
        <IconButton
          size="lg"
          variant="ghost"
          aria-label="open menu"
          icon={<FiBell />}
        />

          <Flex align="center" >
           
            <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              
              </HStack>
            </MenuButton>
            <MenuList
              bg={useColorModeValue('white', 'gray.900')}
              borderColor={useColorModeValue('gray.200', 'gray.700')}>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuItem>Billing</MenuItem>
              <MenuDivider />
              <MenuItem>Sign out</MenuItem>
            </MenuList>
          </Menu>
          </Flex>
        </HStack>
        </Flex>
      
        
        <Box as="main" p={14} minH="25rem" bg={useColorModeValue('auto', 'gray.800')}>
          {children}
        </Box>
      </Box>
    </Box>
    </>
  );
}

const sidebarItems = [
  { name: "Home", icon: <FiHome /> , href: "/dashboard"},
  { name: "Library", icon: <FiFolder/>, href: "/library"},
  { name: "Settings", icon: <FiSettings />, href: "/settings" },
];

const SidebarContent = ({ ...props }: BoxProps) => (
  <Box
    as="nav"
    pos="fixed"
    top="0"
    left="0"
    zIndex="sticky"
    h="full"
    pb="10"
    overflowX="hidden"
    overflowY="auto"
    bg={useColorModeValue('white', 'gray.800')}
    borderColor={useColorModeValue('inherit', 'gray.700')}
    borderRightWidth="1px"
    w="60"
    {...props}
  >
    <Flex px="4" py="5" align="center">
      <Image src='/logo.png' h={8} w={8} />
      <Text
        fontSize="2xl"
        ml="2"
        color={useColorModeValue('brand.500', 'white')}
        fontWeight="semibold"
      >
       ScreenREC
      </Text>
    </Flex>
    <Flex direction="column" as="nav" fontSize="md" color="gray.600" aria-label="Main Navigation">
      
      <NavItem items={sidebarItems} />

    </Flex>
  </Box>
  
);

type SidebarProps = {
  items: {
    name: string;
    icon: React.ReactElement;
    href: string;
  }[];
};

const NavItem = ({items}:SidebarProps) => {
  const color = useColorModeValue('gray.600', 'gray.300');

  return (
    <Flex
      as="nav"
      px="4"
      py="3"
      cursor='pointer'
      
      fontWeight="semibold"
      transition=".15s ease"
      direction="column"
      color={useColorModeValue('inherit', 'gray.400')}
      
      p='4'
    >
      {items.map((item) => (
        <Box key={item.name} p="2" rounded="md" mb="2" bg={useColorModeValue('gray.100', 'gray.700')}>
          <Button as='a' href={item.href} leftIcon={item.icon} iconSpacing='4' variant='ghost' colorScheme={color}>
          
              {item.name}
        
          </Button>
        </Box>
      ))}

    </Flex>
      
  );
};
