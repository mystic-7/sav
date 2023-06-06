import { Box, Grid, GridItem } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CardGrid from '../CardGrid';
import './Stage.css';

const Stage = () => {
  const [showCardGrid, setShowCardGrid] = useState(false);

  const handleRequest = (text: string) => {
    console.log(text);
    setShowCardGrid(true);
  };

  return (
    <Box p={4} mt={1} w={'100%'}>
      <Grid
        templateColumns="1fr"
        templateRows={showCardGrid ? '1fr' : 'auto 1fr'}
        gap={4}
        height="100%"
      >
        <GridItem>
          <AnimatePresence>
            <motion.div
              key="search-bar"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <SearchBar onRequest={handleRequest} />
            </motion.div>
          </AnimatePresence>
        </GridItem>
        {showCardGrid && (
          <GridItem>
            <motion.div
              key="card-grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
              <CardGrid />
            </motion.div>
          </GridItem>
        )}
      </Grid>
    </Box>
  );
};

export default Stage;
