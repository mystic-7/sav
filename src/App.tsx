import { AbsoluteCenter, Grid, GridItem } from '@chakra-ui/react';
import SearchBar from './components/SearchBar';

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
        bgGradient="linear(to-r, green.200, pink.500)"
      >
        <AbsoluteCenter width={'40%'}>
          <SearchBar />
        </AbsoluteCenter>
      </GridItem>
    </Grid>
  );
}
export default App;
