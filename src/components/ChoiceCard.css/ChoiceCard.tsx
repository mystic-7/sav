import { useState } from 'react';
import sd from '../../assets/sd.jpeg';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';

interface Choice {
  id: number;
  name: string;
}

interface Props {
  choice: Choice;
}
const ChoiceCard = ({ choice }: Props) => {
  const [isHovering, setHover] = useState(false);
  return (
    <Card className="card" borderRadius={10} overflow={'hidden'}>
      <Image src={sd} />
      <CardBody>
        <Heading fontSize={'2xl'}>{choice.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ChoiceCard;
