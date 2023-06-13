import { Card, CardBody } from '@chakra-ui/react';
import './ChatBox.css';

const ChatBox = () => {
  return (
    <Card
      className="chat-box"
      borderRadius={10}
      overflow={'hidden'}
      height={'140px'}
      margin={10}
      backgroundColor={'transparent'}
    >
      <CardBody display={'grid'} placeContent={'center'}>
        Aqui va la respuesta
      </CardBody>
    </Card>
  );
};

export default ChatBox;
