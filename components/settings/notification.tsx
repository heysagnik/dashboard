import { Avatar,  Box, Container, FormControl, FormLabel, HStack, IconButton,Input, SimpleGrid, Spacer, Stack, StackDivider, Switch, Text, useColorModeValue } from '@chakra-ui/react'
import { Button, Card,CardBody ,CardFooter, Divider} from '@saas-ui/react';
import * as React from 'react'


export const NotificationSettings = () => {
    
   
    return (
     
      <Stack spacing={{base:'20',md:'30'}} divider={<Divider  my='10'/>} >
      <Stack spacing={'10'} direction={{ base: 'column', md: 'row' }}  >
         <Box>
           <Text fontSize="lg" fontWeight="medium">
             Notifications
           </Text>
           <Text color="muted" fontSize="sm">
           Get notified.
           </Text>
        </Box>
         <Box >
        <Card width={ {base:'100%', md: '200%'}} maxW='lg'>
         <Box
        bg="bg-surface"
        boxShadow={useColorModeValue('sm', 'sm-dark')}
        borderRadius="lg"
        p={{ base: '4', md: '6' }}
      >
        <Stack spacing="5" divider={<StackDivider />}>
            <Stack justify="space-between" direction="row" spacing="4">
              <Stack spacing="0.5" fontSize="sm">
                <Text color="emphasized" fontWeight="medium">
                  Browser
                </Text>
                <Text color="muted">We'll send via our desktop or mobile app</Text>
              </Stack>
              <Switch defaultChecked/>
            </Stack>
            <Stack justify="space-between" direction="row" spacing="4">
              <Stack spacing="0.5" fontSize="sm">
                <Text color="emphasized" fontWeight="medium">
                  Email
                </Text>
                <Text color="muted">We'll send via email</Text>
              </Stack>
              <Switch defaultChecked/>
              </Stack>
        </Stack>
      </Box>     
    </Card>
   </Box>
  </Stack>
</Stack>
    );
};

// 
