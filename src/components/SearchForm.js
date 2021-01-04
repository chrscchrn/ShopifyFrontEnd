import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, InputLabel, OutlinedInput } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '64px 0px',
    color: 'white',
    textShadow: '1px 1px #0000001b',

  },
  form: {
    margin: 0,
    color: 'white',
  },
  input: {
    fontWeight: 'bold',
  }
}));

const SearchForm = props => {
  
  const classes = useStyles();
  const [state, setState] = React.useState();

  function handleChange(e) {
    setState({ ...state, searchValue: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (state.searchValue.length !== 0) {
      props.handleSearch(state.searchValue);
    }
  }

  return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
      <FormControl variant="outlined" fullWidth className={classes.form}>
        <InputLabel htmlFor="component-outlined" color="primary">
          Search
        </InputLabel>
        <OutlinedInput className={classes.input} id="component-outlined" onChange={handleChange} label="Search" color="primary"/>
      </FormControl>
    </form>
  )
}

SearchForm.propTypes = {
  handleSearch: PropTypes.func,
}

export default SearchForm
