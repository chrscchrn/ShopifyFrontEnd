import React from "react";
import 'fontsource-roboto';
import TopPage from "./components/TopPage";
import SearchForm from "./components/SearchForm";
import Results from './components/Results';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import movieSearch from './utils/API';
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#DCE1E3',
      main: '#3C403D',
      dark: '#002884',
      contrastText: '#000',
    },
    secondary: {
      light: '#ff7961',
      main: '#39603D',
      dark: '#ba000d',
      contrastText: '#000',
    },
    gold: {
      main: '#a69344'
    }
  },
});

export default function App() {
  const [state, setState] = React.useState({ 
    results: null, 
    display: false,
    isSearching: true,
    nominations: null,
  });

  function handleSearch(title) {
    movieSearch(title)
      .then(res => {
        if (res.data) setState({ ...state, results: res, display: true });
      })
      .catch(err => console.log(err));
  }

  function handleSwitch(isSearching) {
    if (isSearching) {
      setState({ ...state, isSearching: true, nominations: null });
    } else {
      let storage = [];
      for (let i = 0; i < Object.keys(localStorage).length; i++) {
        storage.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
      setState({ ...state, isSearching: false, results: null, nominations: storage });
    }
  } // lazy loading & suspense for nominations

  function calcNominations() {
    if (Object.keys(localStorage).length === 5) {
      setState({ ...state, totalNominations: Object.keys(localStorage).length, makeNumberGold: true });
    } else {
      setState({ ...state, totalNominations: Object.keys(localStorage).length, makeNumberGold: false });
    }
  }

  React.useEffect(() => {
    if (state.result) {
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state, state.results]);

  React.useEffect(() => {
    calcNominations();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      <CssBaseline/>
      <ThemeProvider theme={theme}>
        <Container fixed>
          <TopPage handleSwitch={handleSwitch} totalNominations={state.totalNominations} gold={state.makeNumberGold}/>
          {state.isSearching ? <SearchForm handleSearch={handleSearch}/> : null}
          <Results results={state.results} nominations={state.nominations} display={state.display} calcNoms={calcNominations}/>
        </Container>
        <Footer/>
      </ThemeProvider>
    </React.Fragment>
  );
}