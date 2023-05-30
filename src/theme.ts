import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    light: {
      gradient: "linear-gradient(-45deg, #F9D89C, #F9D4C1, #C7D2FE, #F5E1A4)",
    },
    dark: {
      gradient: "linear-gradient(-45deg, #3D3F5B, #4F4F6B, #6B6E8D, #0F0F0F)",
    },
  },
});

export default theme;