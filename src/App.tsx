import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import SearchBar from './components/SearchBar/SearchBar';
import Logo from './components/Logo';
import ChoiceCardGrid from './components/ChoiceCardGrid';

function App() {
  return (
    <Grid
      className="body"
      templateAreas={{
        base: ` 'nav' 'main'`,
      }}
      h="100vh"
      justifyItems={'center'} // Set the grid height to the full viewport height
    >
      <GridItem area="nav" w={'100%'}>
        <Center>
          <Logo />
        </Center>
      </GridItem>
      <GridItem area="main" w={'100%'} placeItems="center">
        <Box>
          <SearchBar />
        </Box>
        <Box px={20} pt={10}>
          <ChoiceCardGrid></ChoiceCardGrid>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
