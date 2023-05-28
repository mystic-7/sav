import LogoBlack from '../assets/logo-black.webp';
import { Image } from '@chakra-ui/react';

const Logo = () => {
  return (
    <Image
      src={LogoBlack}
      boxSize={{ base: '150px', lg: '200px', xl: '200px' }}
    />
  );
};

export default Logo;
