import { Avatar,  Box, Container, FormControl, FormLabel, HStack, IconButton,Input, Progress, SimpleGrid, Spacer, Stack, StackDivider, Text, useColorMode } from '@chakra-ui/react'
import { Button, Card,CardBody ,CardFooter, Divider} from '@saas-ui/react';
import * as React from 'react'
import { useUser } from "reactfire";
import { PersonaAvatar } from "@saas-ui/persona";
import {  FiPlus,FiZap} from 'react-icons/fi';



export const AccountSettings = () => {
    const { colorMode } = useColorMode();
    const iconColor = colorMode === "dark" ? "white" : "black"
    const { data: user } = useUser();
    const defaultValues = {
        name: `${user?.displayName}`,
        email: `${user?.email}`,
        picture: `${user?.photoURL}`,
        };
    
   
    return (

    <Stack spacing={{base:'20',md:'30'}} divider={<Divider  my='10'/>} >
     <Stack spacing={'20'} direction={{ base: 'column', md: 'row' }}  >
        <Box>
          <Text fontSize="lg" fontWeight="medium">
            Your Profile
          </Text>
          <Text color="muted" fontSize="sm">
            Customize your Basic Details
          </Text>
       </Box>

        <Box >
        <Card width={ {base:'100%', md: '200%'}} maxW='lg'>
            <CardBody>
              <Stack spacing="5" px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
                <FormControl id="picture" >
                    <Avatar size="lg" src={`${user?.photoURL}`} name={`${user?.displayName}`} zIndex='base'>
                    <IconButton
                        aria-label="Upload Profile Picture"
                        icon={<FiPlus color={iconColor}/>}
                        rounded={'full'}
                        size='sm'
                        colorScheme="purple"
                        position="absolute"
                        bottom="0"
                        right="0"
                        />
                    </Avatar>
                </FormControl>
                <FormControl id="name">
                    <FormLabel>Name</FormLabel>
                    <Input defaultValue={defaultValues.name} />
                </FormControl>
                <FormControl id="email">
                    <FormLabel>Email</FormLabel>
                    <Input defaultValue={defaultValues.email}/>
                </FormControl>

            </Stack>

            </CardBody>
            <CardFooter alignItems={'right'}>
                <Spacer/>
                <Button variant='solid' colorScheme={'purple'}>Save</Button>
            </CardFooter>
        </Card>
        </Box>
      </Stack>
      <Stack spacing={'20'} direction={{ base: 'column', md: 'row' }}  >
        <Box>
            <Text fontSize="lg" fontWeight="medium">
                Billing
            </Text>
            <Text color="muted" fontSize="sm">
                Manage your billing information
            </Text>
        </Box>
        <Box>
            <Card width={ {base:'100%', md: '200%'}} maxW='lg' >
                <CardBody>
                    <Stack spacing="5" px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
                        <Text fontSize="lg" fontWeight="medium" color="emphasized">Your Trial ends in few days</Text>
                        <Progress value={10} size="sm" colorScheme="purple" variant={'outline'}/>
                        
                     </Stack>
                </CardBody>
                <CardFooter>
                    <Spacer/>
                    <Button variant='solid' leftIcon={<FiZap/>}>Upgrade</Button>
                </CardFooter>
            </Card>


        </Box>
    </Stack>
 </Stack>

     
    );
};

// Path: components\settings\integrations.tsx