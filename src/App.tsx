import { Center, Grid, GridItem, Heading } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'main'`,
      }}
    >
      <GridItem className="body" height="calc(100vh)" area="main">
        <Center padding={5}>
          <Logo />
        </Center>
        <SearchBar />
      </GridItem>
    </Grid>
  );
}
export default App;
