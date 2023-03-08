import React, { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import { useSigninCheck } from 'reactfire';
import { Loader } from '@saas-ui/react';
import { useRouter } from 'next/router';

export default function Home() {
  const [hasMounted, setHasMounted] = useState(false);
  const { status, data: signInCheckResult } = useSigninCheck();
  const [signedIn, setSignedIn] = useState(false);
  const router = useRouter();
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  if (status === 'loading') {
    return <Loader/>;
  }

  if (signInCheckResult.signedIn) {
    router.push('/dashboard');
  }
  return (
    <Box>
      <h1>Home</h1>
    </Box>
  );
}
