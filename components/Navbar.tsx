import { Flex, Button, Text } from '@chakra-ui/react';
import { signOut, useSession } from 'next-auth/react';

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <Flex
      justify='space-between'
      align='center'
      width='100%'
      height='64px'
      padding='0px 24px'
    >
      {!!session ? (
        <>
          <Text fontSize='xl'>
            Logged in: {session.user?.email ?? session.user?.name}
          </Text>
          <Button size='md' onClick={() => signOut()}>
            Logout
          </Button>
        </>
      ) : (
        <Text fontSize='lg'>Welcome!</Text>
      )}
    </Flex>
  );
};

export default Navbar;
