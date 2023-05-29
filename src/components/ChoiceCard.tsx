import LogoBlack from '../assets/logo-black.webp';
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';

interface Choice {
  id: number;
  name: string;
}

interface Props {
  choice: Choice;
}
const ChoiceCard = ({ choice }: Props) => {
  return (
    <Card borderRadius={10} overflow={'hidden'}>
      <Image src={LogoBlack} />
      <CardBody>
        <Heading fontSize={'2xl'}>{choice.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default ChoiceCard;
