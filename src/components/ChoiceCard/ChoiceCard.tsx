import {
  Card,
  CardBody,
  Heading,
  Image,
  Text,
  Stack,
  Collapse,
} from '@chakra-ui/react';
import './ChoiceCard.css';
import { useState } from 'react';

interface Choice {
  id: number;
  name: string;
  img: string;
}

interface Props {
  choice: Choice;
}

const ChoiceCard = ({ choice }: Props) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <Card
      className="choice-card"
      h={'md'}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
      variant="elevated"
      background={'black.500'}
    >
      <Image src={choice.img} boxSize={400} maxH={hover ? '60%' : '80%'} />
      <CardBody paddingY={2} paddingX={4}>
        <Stack mt="2" spacing="1">
          <Heading
            size={hover ? 'md' : 'lg'}
            textColor={'MenuText'}
            transitionDuration={'0.5s'}
          >
            {choice.name}
          </Heading>
          <Collapse in={hover}>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design
              with a sprinkle of vintage design.
            </Text>
            <Text color="blue.600" fontSize="lg">
              $450
            </Text>
          </Collapse>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ChoiceCard;
