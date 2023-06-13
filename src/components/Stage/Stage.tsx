import { Box, Collapse, Grid, GridItem } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import CardGrid from '../CardGrid';
import './Stage.css';
import ChatBox from '../ChatBox/ChatBox';

const Stage = () => {
  const [showCardGrid, setShowCardGrid] = useState(false);
  const showBar = true;
  const handleRequest = (text: string) => {
    console.log(text);
    setShowCardGrid(true);
  };

  return (
    <Box w={'100%'}>
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
          {!showCardGrid && <Box h={100} />}
        </GridItem>
        <GridItem>
          <Collapse className="collapse" in={showCardGrid} animateOpacity>
            <CardGrid />
            <Box
              display={'flex'}
              justifyItems={'flex-start'}
              alignItems={'center'}
            >
              <ChatBox />
            </Box>
          </Collapse>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Stage;
