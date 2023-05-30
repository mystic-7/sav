import {
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import SearchBar from './SearchBar/SearchBar';
import ChoiceCardGrid from './ChoiceCardGrid';

const Stage = () => {
  const { isOpen, onToggle } = useDisclosure();

  const handleRequest = (requestText: string) => {
    console.log(requestText);
    onToggle();
  };

  const background = useColorModeValue('light.gradient', 'dark.gradient');

  return (
    <Box p={4} mt={10}>
      <Grid
        templateColumns="1fr"
        templateRows={isOpen ? 'auto 1fr' : '1fr'}
        gap={4}
        height="100%"
      >
        <GridItem>
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                key="search-bar"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <SearchBar onRequest={handleRequest} />
              </motion.div>
            )}
          </AnimatePresence>
        </GridItem>
        {isOpen && (
          <GridItem>
            <motion.div
              key="card-grid"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.3 }}
            >
              <ChoiceCardGrid />
            </motion.div>
          </GridItem>
        )}
      </Grid>
      <Box />
    </Box>
  );
};

export default Stage;
