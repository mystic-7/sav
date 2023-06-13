import { Card, CardBody, LightMode } from '@chakra-ui/react';
import TypewriterComponent from 'typewriter-effect';
import { isDayTime } from '../../dayTime';
import './ChatBox.css';

const ChatBox = () => {
  return (
    <Card
      className="chat-box"
      borderRadius={10}
      overflow={'hidden'}
      height={'140px'}
      w={'40%'}
      backgroundColor={'transparent'}
      variant={'unstyled'}
    >
      <CardBody
        display={'grid'}
        placeContent={'center'}
        textColor={isDayTime() ? '#828282' : '#FFFFF'}
      >
        <TypewriterComponent
          onInit={(typewritter) => {
            typewritter
              .typeString(
                'Te recomiendo los siguientes restaurantes para una cita romantica en El Hatillo'
              )
              .changeDelay(10000000000)
              .start();
          }}
        />
      </CardBody>
    </Card>
  );
};

export default ChatBox;
