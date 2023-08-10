import { ThemeProvider } from "@mui/material/styles";
import theme from "@/src/theme";

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
