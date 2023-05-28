import { Input } from '@chakra-ui/react';
import { MdOutlineWavingHand } from 'react-icons/md';

const SearchBar = () => {
  return (
    <Input
      borderRadius={20}
      borderWidth={3}
      focusBorderColor="white"
      fontSize={'2xl'}
      placeholder="a donde quieres ir hoy 👋🏻"
      _placeholder={{ justifySelf: 'center' }}
    />
  );
};

export default SearchBar;
