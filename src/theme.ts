import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    light: {
      gradient: "linear-gradient(-45deg, #F9D89C, #F9D4C1, #C7D2FE, #F5E1A4)",
    },
    dark: {
      gradient: "linear-gradient(-45deg, #14162B, #484C74, #656C94, #FF7F50)",
    },
  },
});

export default theme;

