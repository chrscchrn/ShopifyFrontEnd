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
        // marginBottom: '16px',
    },
    textDiv: {
        height: "12vh"
    },
    paper: {
        padding: 8,
    },
}));

export default function MovieColumn(props) {

    const classes = useStyles();

    const [state, setState ] = React.useState({ 
        imdbID: props.data.imdbID,
        Title: props.data.Title,
        Year: props.data.Year,
        Poster: props.data.Poster,
        isNominated: false,
    });

    function handleNominationLimit() {
        if (Object.keys(localStorage).length >= 5) {
            alert('Your at the limit of 5 nominations'); //HERE======================================================================
            return true;
        } else {
            return false
        }
    }

    function handleNomination() {
        if (handleNominationLimit() === true) return;
        localStorage.setItem(JSON.stringify(state.imdbID), JSON.stringify({
            imdbID: state.imdbID,
            Title: state.Title,
            Year: state.Year,
            Poster: state.Poster,
        }));
        setState({ ...state, isNominated: true });
        props.calcNoms();
    }

    function handleRemoveNomination() {
        localStorage.removeItem(JSON.stringify(state.imdbID));
        setState({ ...state, isNominated: false });
        props.calcNoms();
    }
    

    React.useEffect(() => {
        let checkNomination = localStorage.getItem(JSON.stringify(state.imdbID));
        console.log(checkNomination, "here")
        if (checkNomination !== null) setState({ ...state, isNominated: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    console.log(state);

    return (
        <Grid item xs={4} key={props.data.imdbID}>
            <Paper elevation={1} className={classes.paper} variant="elevation">
                <div className={classes.textDiv}>
                    <Headers variant="h5" component="h5">{props.data.Title}</Headers>
                    <Typography>{props.data.Year}</Typography>
                </div>
                <Image className={classes.poster} src={props.data.Poster} alt={props.data.Title + '\'s Movie Poster'}/>
                <br/>
                {state.isNominated === true 
                ? <RemoveNominationButton click={handleRemoveNomination}/> 
                : <NominationButton click={handleNomination}/>}
                <br/>
            </Paper>
        </Grid>
    )
}

MovieColumn.propTypes = {

}
