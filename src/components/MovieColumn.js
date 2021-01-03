import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

const movieColumn = props => {
    return (
        <Grid item xs={4}>
            <Paper>
                <p>{props.data.Title}</p>
                <p>{props.data.Year}</p>
                <img src={props.data.Poster} alt={props.data.Title + '\'s Movie Poster'}/>
            </Paper>
        </Grid>
    )
}

movieColumn.propTypes = {

}

export default movieColumn
