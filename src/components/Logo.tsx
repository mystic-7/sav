import LogoBlack from '../assets/logo-black.webp';
import LogoWhite from '../assets/logo-white.webp';
import { Image, Box } from '@chakra-ui/react';
import { isDayTime } from '../dayTime';

const Logo = ({ size = '100px' }) => {
  return (
    <Box pt={10} maxW={size} maxH={size}>
      <Image src={isDayTime() ? LogoBlack : LogoWhite} mx="auto" />
    </Box>
  );
};

export default Logo;
