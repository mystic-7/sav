import { Box, Center, Grid, GridItem } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CardGrid from '../CardGrid';
import './Stage.css';
import ChatBox from '../ChatBox/ChatBox';
import { useAutoAnimate } from '@formkit/auto-animate/react';

const Stage = () => {
  const [showCardGrid, setShowCardGrid] = useState(false);
  const handleRequest = (text: string) => {
    console.log(text);
    setShowCardGrid(true);
  };
  const [gridRef] = useAutoAnimate();

  return (
    <Box w={'100%'}>
      <Grid
        ref={gridRef}
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
          {!showCardGrid && <Box h={130} />}
        </GridItem>
        {showCardGrid && (
          <GridItem>
            <motion.div
              key="card-grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <Center>
                <ChatBox />
              </Center>
              <CardGrid />
            </motion.div>
          </GridItem>
        )}
      </Grid>
    </Box>
  );
};

export default Stage;
