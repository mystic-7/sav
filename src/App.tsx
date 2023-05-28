import { AbsoluteCenter, Box, Center, Grid, GridItem } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';

function App() {
  return (
    <Grid
      templateAreas={{
        base: `'main'`,
      }}
    >
      <GridItem
        height="calc(100vh)"
        area="main"
        bgGradient="linear(to-r, #E8E1E1, #D2C2B0)"
      >
        <Center padding={2}>
          <Logo />
        </Center>
        <AbsoluteCenter width={'50%'}>
          <SearchBar />
        </AbsoluteCenter>
      </GridItem>
    </Grid>
  );
}
export default App;
