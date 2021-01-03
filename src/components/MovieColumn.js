import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Image from 'material-ui-image'
import { Typography } from '@material-ui/core';


const movieColumn = props => {
    
    return (
        <Grid item xs={4}>
            <Paper>
                <Typography>{props.data.Title}</Typography>
                <Typography>{props.data.Year}</Typography>
                <Image style={{objectFit: 'contain', top: 0}} src={props.data.Poster} alt={props.data.Title + '\'s Movie Poster'}/>
            </Paper>
        </Grid>
    )
}

movieColumn.propTypes = {

}

export default movieColumn
