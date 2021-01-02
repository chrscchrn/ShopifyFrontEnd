import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  form: {
    margin: 0,
  },
}));

const SearchForm = () => {
  
  const classes = useStyles();
  const [state, setState] = React.useState();

  function handleChange(e) {
    setState({ ...state, searchValue: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (state.searchValue.length !== 0) {
      //api goes here
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <FormControl variant="outlined" fullWidth className={classes.form}>
        <InputLabel htmlFor="component-outlined" color="primary">
          Search
        </InputLabel>
        <OutlinedInput id="component-outlined" onChange={handleChange} label="Search" color="primary"/>
      </FormControl>
    </form>
  )
}

export default SearchForm