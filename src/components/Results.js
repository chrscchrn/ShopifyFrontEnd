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
    
    
    return (
        <div className={classes.root}>
        </div>
    )
}

// Results.propTypes = {

// }

export default Results
