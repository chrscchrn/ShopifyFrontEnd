import React from "react";
import 'fontsource-roboto';
import TopPage from "./components/TopPage";
import SearchForm from "./components/SearchForm";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#000000',
      main: '#000000',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

export default function app() {
  return (
    <React.Fragment>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <Container fixed>
          <TopPage/>
          <SearchForm/>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}