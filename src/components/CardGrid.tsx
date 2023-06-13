import { SimpleGrid } from '@chakra-ui/react';
import ChoiceCard from './ChoiceCard/ChoiceCard';
import choices from '../choices';

const CardGrid = () => {
  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        paddingY={7}
        paddingX={20}
        spacing={10}
      >
        {choices.map((choice) => (
          <ChoiceCard key={choice.id} choice={choice} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default CardGrid;
