import { Avatar,  Box, Container, FormControl, FormLabel, HStack, IconButton,Input, SimpleGrid, Spacer, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Button, Card,CardBody ,CardFooter, Divider} from '@saas-ui/react';
import * as React from 'react'
import { useUser } from "reactfire";
import { PersonaAvatar } from "@saas-ui/persona";
import {  FiPlus} from 'react-icons/fi';



export const AccountSettings = () => {
    const { data: user } = useUser();
    const defaultValues = {
        name: `${user?.displayName}`,
        email: `${user?.email}`,
        picture: `${user?.photoURL}`,
        };
    
   
    return (
    <Container maxW={'7xl'} >
     <Stack spacing={'20'} direction={{ base: 'column', md: 'row' }}  >
        <Box>
          <Text fontSize="lg" fontWeight="medium">
            Your Profile
          </Text>
          <Text color="muted" fontSize="sm">
            Tell others who you are
          </Text>
       </Box>
        <Box >
        <Card width='250%' >
            <CardBody>
              <Stack spacing="5" px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
                <FormControl id="picture" zIndex={'base'}>
                    <Avatar size="lg" src={`${user?.photoURL}`} name={`${user?.displayName}`} >
                    <IconButton
                        aria-label="Upload Profile Picture"
                        icon={<FiPlus/>}
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
        <Divider my={10} />

      <Stack spacing={'20'} direction={{ base: 'column', md: 'row' }}  >
        <Box>
            <Text fontSize="lg" fontWeight="medium">
                Billing
            </Text>
            <Text color="muted" fontSize="sm">
                Manage your billing information
            </Text>
        </Box>
        <Box >
            

        </Box>
    </Stack>
 
</Container>
     
    );
};

// Path: components\settings\integrations.tsx