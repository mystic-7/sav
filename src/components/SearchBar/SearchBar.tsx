import { Input } from '@chakra-ui/react';
import { useRef, useState } from 'react';
import './SearchBar.css';

interface Props {
  onRequest: (requestText: string) => void;
}

const SearchBar = ({ onRequest }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (ref.current) onRequest(ref.current.value);
    if (!submitted) {
      setSubmitted(true);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`search-bar ${submitted ? 'submitted' : ''}`}
    >
      <Input
        ref={ref}
        borderRadius={20}
        focusBorderColor="black"
        placeholder="¿A dónde quieres ir hoy 👋🏻?"
        height={'70px'}
        width={'40%'}
        textAlign={'center'}
        variant={'filled'}
      />
    </form>
  );
};

export default SearchBar;
