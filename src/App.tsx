import {
  AbsoluteCenter,
  Center,
  Grid,
  GridItem,
  useDisclosure,
} from '@chakra-ui/react';
import SearchBar from './components/SearchBar/SearchBar';
import ChoiceCardGrid from './components/ChoiceCardGrid';
import Logo from './components/Logo';

function SlideFadeEx() {
  const { isOpen, onToggle } = useDisclosure();
}

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'main'`,
      }}
    >
      <GridItem
        className="body"
        height="calc(100vh)"
        area="main"
        alignContent={'center'}
      >
        <Center padding={5}>
          <Logo />
        </Center>
        <SearchBar />
        <Center padding={5}>
          <ChoiceCardGrid />
        </Center>
      </GridItem>
    </Grid>
  );
}
export default App;
