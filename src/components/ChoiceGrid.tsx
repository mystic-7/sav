import { SimpleGrid } from '@chakra-ui/react';
import ChoiceCard from './ChoiceCard.css/ChoiceCard';
import choices from '../choices';

const GameGrid = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={15}
        spacing={10}
      >
        {choices.map((choice) => (
          <ChoiceCard key={choice.id} choice={choice} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
