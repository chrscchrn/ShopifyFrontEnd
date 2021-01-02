import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const SearchForm = () => {
  
  const classes = useStyles();
  const [state, setState] = React.useState();

  function handleChange(e) {
    setState({ ...state, searchValue: e.target.value })
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" style={{ border: '1px solid black'}}>
      <FormControl variant="outlined">
        <InputLabel htmlFor="component-outlined">Search</InputLabel>
        <OutlinedInput id="component-outlined" onChange={handleChange} label="Search" />
      </FormControl>
    </form>
  )
}

export default SearchForm
