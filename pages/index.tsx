import styles from '@/styles/Home.module.css';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { Button, Flex, Text } from '@chakra-ui/react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Leonardo</title>
        <meta
          name='description'
          content='Test app for Leonardo by Charbel Antouny'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${inter.className}`}>
        {!!session ? (
          <Flex direction='column' padding='24'></Flex>
        ) : (
          <div className={styles.main}>
            <Text fontSize='4xl'>You are not logged in</Text>
            <Button size='lg' onClick={() => signIn()}>
              Login
            </Button>
          </div>
        )}
      </main>
    </>
  );
}
