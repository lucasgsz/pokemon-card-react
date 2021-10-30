import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { theme as myTheme } from "../styles/theme";

const theme = extendTheme(myTheme);

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme} resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
