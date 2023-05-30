import {
  Center,
  Grid,
  GridItem,
  useColorMode,
  useColorModeValue,
} from '@chakra-ui/react';
import Logo from './components/Logo';
import Stage from './components/Stage';
import './App.css';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const background = useColorModeValue('light.gradient', 'dark.gradient');

  // Function to check if it's currently day time
  const isDayTime = () => {
    const currentHour = new Date().getHours();
    return currentHour >= 6 && currentHour < 18;
  };

  // Update the color mode based on the time of day
  if (
    (colorMode === 'light' && !isDayTime()) ||
    (colorMode === 'dark' && isDayTime())
  ) {
    toggleColorMode();
  }

  return (
    <Grid
      className="body"
      bg={background}
      backgroundSize="400% 400%"
      animation="gradient 15s ease infinite"
      height="100vh"
      templateAreas={{
        base: ` 'nav' 'main'`,
      }}
      h="100vh"
      justifyItems="center"
    >
      <GridItem area="nav" w="100%">
        <Center>
          <Logo />
        </Center>
      </GridItem>
      <GridItem area="main" w="100%" placeItems="center">
        <Stage />
      </GridItem>
    </Grid>
  );
}

export default App;
