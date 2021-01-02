import React from 'react'
// import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Results = props => {

    const classes = useStyles();
    let movieResults = null;
    if (props.results) {
        // movieResults = props.results.data.Search.map(({ Title, Year, Poster }) => )
        movieResults = props.results;
        let count = 1;
        let children = {};
        for (let i = 0; i < movieResults.length; i++) {
            children.movieResults[i].Title = movieResults;
            count += 1;

        }
        console.log(children, count)
    }
    
    return (
        <div className={classes.root}>
        </div>
    )
}

// Results.propTypes = {

// }

export default Results
