import {
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Box,
} from '@chakra-ui/react';

const WelcomeModal: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box padding='24px 0'>
      <Button size='lg' width='max-content' onClick={onOpen}>
        Show Help
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Welcome to Leonardo!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontSize='md'>
              Using this portal, you can view and set your username and job
              title. Use the buttons to get started!
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default WelcomeModal;
