import Layout from '@/components/Layout';
import { useAppState } from '@/providers/AppState';
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

const ViewDetails: React.FC = () => {
  const { status } = useSession({
    required: true,
  });
  const {
    state: { username, jobTitle },
  } = useAppState();
  const router = useRouter();

  return (
    <Layout>
      {status === 'loading' && <Text fontSize='lg'>Loading...</Text>}
      {status === 'authenticated' && (
        <>
          <Card>
            <CardHeader>
              <Heading>Your Information</Heading>
            </CardHeader>

            <CardBody>
              <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Username
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {username ? username : 'You have not set one yet!'}
                  </Text>
                </Box>
                <Box>
                  <Heading size='xs' textTransform='uppercase'>
                    Job Title
                  </Heading>
                  <Text pt='2' fontSize='sm'>
                    {jobTitle ? jobTitle : 'You have not set one yet!'}
                  </Text>
                </Box>
              </Stack>
            </CardBody>
          </Card>
          <Button
            width='min-content'
            marginTop='1rem'
            size='lg'
            onClick={() => router.push('/')}
          >
            Home
          </Button>
        </>
      )}
    </Layout>
  );
};

export default ViewDetails;
