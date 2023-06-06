import LogoBlack from '../assets/logo-black.webp';
import { Image, Box } from '@chakra-ui/react';

const Logo = ({ size = '100px' }) => {
  return (
    <Box pt={10} maxW={size} maxH={size}>
      <Image src={LogoBlack} mx="auto" />
    </Box>
  );
};

export default Logo;
