import Graphql from '@/components/Graphql';
import Layout from '@/components/Layout';
import WelcomeModal from '@/components/WelcomeModal';
import styles from '@/styles/Home.module.css';
import { GET_RICK_AND_MORTY, client } from '@/utils/apolloClient';
import { Button, Flex, Text, Link } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { signIn, useSession } from 'next-auth/react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import NextLink from 'next/link';

const inter = Inter({ subsets: ['latin'] });

interface HomeProps {
  characters: Array<{ id: number; name: string }>;
}

export default function Home({ characters }: HomeProps) {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Charbel Antouny Test App</title>
        <meta
          name='description'
          content='Next.js test app by Charbel Antouny'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${inter.className}`}>
        {!!session ? (
          <Layout>
            <Text fontSize='2xl'>Welcome to the Portal!</Text>
            <WelcomeModal />
            <Flex align='center' gap='1rem' margin='1rem 0'>
              <Text fontSize='lg'>Actions:</Text>
              <Link as={NextLink} href='/user-info/view'>
                View Details
              </Link>
              <Link as={NextLink} href='/user-info/username'>
                Update Username
              </Link>
              <Link as={NextLink} href='/user-info/job-title'>
                Update Job Title
              </Link>
            </Flex>
            <Graphql characters={characters} />
          </Layout>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { data } = await client.query({
    query: GET_RICK_AND_MORTY,
  });

  return {
    props: {
      characters: data.characters.results,
    },
  };
};
