import React from "react";
import 'fontsource-roboto';
import TopPage from "./components/TopPage";
import SearchForm from "./components/SearchForm";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export default function app() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container fixed>
        <TopPage/>
        <SearchForm/>
      </Container>
    </React.Fragment>
  );
}