import SearchBar from './SearchBar/SearchBar';
import ChoiceCardGrid from './ChoiceGrid';
import { Box, SlideFade, useDisclosure } from '@chakra-ui/react';

const Stage = () => {
  const { isOpen, onToggle } = useDisclosure();

  const handleRequest = (requestText: string) => {
    console.log(requestText);
    onToggle();
  };

  return (
    <>
      <Box p={4} mt={10}>
        <Box />
        <SearchBar onRequest={handleRequest} />
        <SlideFade in={isOpen} offsetY={'20px'} delay={0.3}>
          <ChoiceCardGrid />
        </SlideFade>
      </Box>
    </>
  );
};

export default Stage;
