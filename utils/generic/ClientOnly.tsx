import React, { useState, useEffect, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  [key: string]: any;
};

function ClientOnly({ children, ...delegated }: Props) {
  const [hasMounted, setHasMounted] = useState<boolean>(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div {...delegated}>
      {children}
    </div>
  );
}

export default ClientOnly;
