import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Image from 'material-ui-image'
import { Typography } from '@material-ui/core';
import Headers from './Headers';
import NominationButton from './NominationButton';
import RemoveNominationButton from './RemoveNominationButton';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: 'center',
  },
  poster: {
    objectFit: 'contain !important', 
    marginBottom: '16px',
  },
  textDiv: {
    height: "12vh"
  },
  paper: {

  }
}));

export default function MovieColumn(props) {

    const classes = useStyles();

    const [state, setState ] = React.useState({ 
        id: props.data.imdbID,
        title: props.data.Title,
        year: props.data.Year,
        poster: props.data.Poster,
        isNominated: false,
    });

    function handleNomination() {
        console.log('button working')
        localStorage.setItem(JSON.stringify(state.id), JSON.stringify(state));
        setState({ ...state, isNominated: true });
        props.calcNoms();
    }

// limit nominations
    function handleRemoveNomination() {
        localStorage.removeItem(JSON.stringify(state.id));
        setState({ ...state, isNominated: false });
        props.calcNoms();
    }
    

    React.useEffect(() => {
        let checkNomination = localStorage.getItem(JSON.stringify(state.id));
        console.log(JSON.parse(checkNomination));
        if (checkNomination !== null) setState({ ...state, isNominated: true })
    }, [])

    return (
        <Grid item xs={4} key={props.data.imdbID}>
            <Paper elevation={4} className={classes.paper} variant="elevation" style={{
                padding: '8px',
            }}>
                <div className={classes.textDiv}>
                    <Headers variant="h5" component="h5">{props.data.Title}</Headers>
                    <Typography>{props.data.Year}</Typography>
                </div>
                <Image className={classes.poster} src={props.data.Poster} alt={props.data.Title + '\'s Movie Poster'}/>
            </Paper>
            <div> 
            {/* make fixed or absolute, look at the gatsby site to figure it otu */}
                {state.isNominated === true 
                ? <RemoveNominationButton click={handleRemoveNomination}/> 
                : <NominationButton click={handleNomination}/>}
            </div>
        </Grid>
    )
}

MovieColumn.propTypes = {

}
