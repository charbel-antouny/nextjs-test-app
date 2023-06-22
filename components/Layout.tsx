import { Flex } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <Flex direction='column' padding='24'>
      {children}
    </Flex>
  );
};

export default Layout;
