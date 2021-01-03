import React from "react";
import 'fontsource-roboto';
import TopPage from "./components/TopPage";
import SearchForm from "./components/SearchForm";
import Results from './components/Results';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import movieSearch from './utils/API';
import { Typography } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#DCE1E3',
      main: '#3C403D',
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
  const [state, setState] = React.useState({ 
    results: null, 
    display: false,
    isSearching: true,
  });

  function handleSearch(title) {
    movieSearch(title)
      .then(res => {
        if (res.data) setState({ ...state, results: res, display: true });
        console.log(res, "res");
      })
      .catch(err => console.log(err));
  }

  function handleSwitch(isSearching) {
    if (isSearching) {
      setState({ ...state, isSearching: true });
    } else {
      setState({ ...state, isSearching: false, results: null });
    }
  }

  function clearSearchResults() {

  }

  React.useEffect(() => {
    if (state.results) {
      switch (state.results.data.Error) {
        case "Too many results.":
          alert(state.results.data.Error);
          break;
        case "Movie not found!":
          alert(state.results.data.Error);
          break;
        default:
          break;
      }
    }
    console.log(state);
  }, [state, state.results])

  return (
    <React.Fragment>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <Container fixed>
          <TopPage handleSwitch={handleSwitch}/>
          {state.isSearching ? <SearchForm handleSearch={handleSearch}/> : null}
          <Results results={state.results} display={state.display}/>
        </Container>
        <footer style={{ margin: '8vh 0', textAlign: 'center' }}>
          <Typography variant="h6">
            Christopher Cochran
            <br/>
            <a href="https://cochranc.com">Cochranc.com</a>
          </Typography>
        </footer>
      </ThemeProvider>
    </React.Fragment>
  );
}