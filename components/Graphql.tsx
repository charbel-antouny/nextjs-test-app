import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  Stack,
  StackDivider,
  Text,
} from '@chakra-ui/react';

interface GraphqlProps {
  characters: Array<{ id: number; name: string }>;
}

const Graphql: React.FC<GraphqlProps> = ({ characters }) => {
  // const { loading, error, data } = useQuery(GET_RICK_AND_MORTY);

  // if (loading) {
  //   return <Spinner size='xl' />;
  // }

  // if (error) {
  //   return (
  //     <Text color='red.500' fontSize='lg'>
  //       Error: {error.message}
  //     </Text>
  //   );
  // }

  return (
    <Card>
      <CardHeader>
        <Heading size='lg'>Check out all these aliases for Rick!</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='2'>
          {characters.map(({ id, name }) => (
            <Text key={id} fontSize='md'>
              {name}
            </Text>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Graphql;
