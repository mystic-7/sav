import { Card, CardBody, Center, grid } from '@chakra-ui/react';

const ChatBox = () => {
  return (
    <Card
      className="card"
      borderRadius={10}
      overflow={'hidden'}
      height={'140px'}
      width={'40%'}
      margin={10}
    >
      <CardBody display={'grid'} placeContent={'center'}>
        Chupame la pija
      </CardBody>
    </Card>
  );
};

export default ChatBox;
