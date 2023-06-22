import Layout from '@/components/Layout';
import { useAppState } from '@/providers/AppState';
import { Button, Flex, Heading, Input, Text, useToast } from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const JobTitle: React.FC = () => {
  const { status } = useSession({
    required: true,
  });

  const {
    state: { jobTitle },
    dispatch,
  } = useAppState();
  const [value, setValue] = useState('');
  const toast = useToast();
  const router = useRouter();

  const handleChange = (event: any) => setValue(event.target.value);

  const updateJobTItle = () => {
    dispatch({ type: 'UPDATE_JOB_TITLE', payload: value });
    toast({
      title: 'Saved!',
      description: 'Your job title has been updated!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Layout>
      {status === 'loading' && <Text fontSize='lg'>Loading...</Text>}
      {status === 'authenticated' && (
        <Flex direction='column' gap='1rem'>
          <Heading>Update Job Title</Heading>
          <Text mb='8px'>Current Job Title: {jobTitle}</Text>
          <Input
            value={value}
            onChange={handleChange}
            placeholder='New job title'
            size='md'
          />
          <Flex gap='1rem'>
            <Button size='lg' width='min-content' onClick={updateJobTItle}>
              Save
            </Button>
            <Button
              size='lg'
              width='min-content'
              onClick={() => router.push('/')}
            >
              Home
            </Button>
          </Flex>
        </Flex>
      )}
    </Layout>
  );
};

export default JobTitle;
