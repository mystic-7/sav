import { Input } from '@chakra-ui/react';

const SearchBar = () => {
  return (
    <Input
      borderRadius={20}
      focusBorderColor="black"
      placeholder="¿a donde quieres ir hoy 👋🏻?"
      height={'70PX'}
      textAlign={'center'}
      variant={'filled'}
    />
  );
};

export default SearchBar;
