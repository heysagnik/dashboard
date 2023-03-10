import { Avatar,  Box, Container, FormControl, FormLabel, HStack, IconButton,Input, SimpleGrid, Spacer, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Button, Card,CardBody ,CardFooter} from '@saas-ui/react';
import * as React from 'react'


export const NotificationSettings = () => {
    
   
    return (
     
        <Box margin={'5'}>
        <Card width={'auto'}>
            <CardBody>
              <Stack spacing="5" px={{ base: '4', md: '6' }} py={{ base: '5', md: '6' }}>
                

            </Stack>

            </CardBody>
            <CardFooter alignItems={'right'}>
                <Spacer/>
                <Button variant='solid' colorScheme={'purple'}>Save</Button>
            </CardFooter>
        </Card>
        </Box>
   
     
    );
};

// 