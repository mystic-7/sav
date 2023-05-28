import { AbsoluteCenter, Input } from '@chakra-ui/react';
import { useRef } from 'react';

const SearchBar = () => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) console.log(ref.current.value);
      }}
    >
      <AbsoluteCenter width={'40%'}>
        <Input
          ref={ref}
          borderRadius={20}
          focusBorderColor="black"
          placeholder="¿a donde quieres ir hoy 👋🏻?"
          height={'70px'}
          textAlign={'center'}
          variant={'filled'}
        />
      </AbsoluteCenter>
    </form>
  );
};

export default SearchBar;
