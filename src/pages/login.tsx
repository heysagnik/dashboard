import { useState } from 'react'
import { useRouter } from 'next/router'
import { useCallback, useEffect } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { Box, Button, FormControl, FormLabel, Input, Heading, Text, Stack } from '@chakra-ui/react'
import { useSignInWithProvider } from "utils/hooks/useSignInWithProvider";
import { useSigninCheck } from "reactfire";
import { Loader } from '@saas-ui/react';



const Login = () => {
  const [signInWithProvider, signInWithProviderState] = useSignInWithProvider();
  const router = useRouter();
  const { status, data: signInCheckResult } = useSigninCheck();

  const AuthProviderButton = () => {
    return (
      <Button
        mt={4}
        onClick={() => {
          signInWithProvider(new GoogleAuthProvider());
        }}
        type='submit'
      >
        Login with Google
      </Button>
    )
  
  }

  
  const onSignIn = useCallback( () => {
    return router.push("/dashboard");
  }, [router]);
  
  useEffect(() => {

    if (signInWithProviderState.success) {
      onSignIn();
    }
   
  }, [signInWithProviderState.success, onSignIn]);
  
  if (status === "loading") {
    return <Loader />;
  }
  
 
  if (signInCheckResult?.signedIn) {
    onSignIn();
  }

 


  return (
         <Box p={4} textAlign='center'>
              <Text as={Heading} align='center' >Login </Text>
              <AuthProviderButton />
          </Box>   
  )     
}

export default Login
