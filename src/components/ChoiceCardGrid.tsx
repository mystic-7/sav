import { SimpleGrid } from '@chakra-ui/react';
import ChoiceCard from './ChoiceCard';

const GameGrid = () => {
  const choices = [
    { id: 1, name: 'opcion 1' },
    { id: 2, name: 'opcion 2' },
    { id: 2, name: 'opcion 2' },
  ];
  return (
    <>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} padding={15} spacing={10}>
        {choices.map((choice) => (
          <ChoiceCard key={choice.id} choice={choice} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
