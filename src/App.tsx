import { Center, Grid, GridItem } from '@chakra-ui/react';
import Logo from './components/Logo';
import Stage from './components/Stage';

function App() {
  return (
    <Grid
      className="body"
      templateAreas={{
        base: ` 'nav' 'main'`,
      }}
      h="100vh"
      justifyItems={'center'}
    >
      <GridItem area="nav" w={'100%'}>
        <Center>
          <Logo />
        </Center>
      </GridItem>
      <GridItem area="main" w={'100%'} placeItems="center">
        <Stage />
      </GridItem>
    </Grid>
  );
}

export default App;
