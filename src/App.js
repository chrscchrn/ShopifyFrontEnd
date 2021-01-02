import React from "react";
import 'fontsource-roboto';
import TopPage from "./components/TopPage";
import SearchForm from "./components/SearchForm";
import Results from './components/Results';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import movieSearch from './utils/API';

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

export default function App() {
  const [state, setState] = React.useState({ results: null});

  function handleSearch(title) {
    movieSearch(title)
      .then(res => {
        setState({ results: res });
      })
      .catch(err => console.log(err));
  }

  React.useEffect(() => {
    console.log(state.results)
  }, [state.results])

  // function handleNominations() {
  //   setState()
  // }

  return (
    <React.Fragment>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <Container fixed>
          <TopPage/>
          <SearchForm handleSearch={handleSearch}/>
          <Results results={state.results}/>
        </Container>
      </ThemeProvider>
    </React.Fragment>
  );
}