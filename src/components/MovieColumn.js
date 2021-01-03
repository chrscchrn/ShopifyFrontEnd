import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import Image from 'material-ui-image'
import { Typography } from '@material-ui/core';
import Headers from './Headers';

const movieColumn = props => {

    return (
        <Grid item xs={4} key={props.data.imdbID}>
            <Paper elevation={4} className="" variant="elevation" style={{
                padding: '8px',
            }}>
                <div style={{ height: "12vh" }}>
                    <Headers variant="h5" component="h5">{props.data.Title}</Headers>
                    <Typography>{props.data.Year}</Typography>
                </div>
                <Image style={{ objectFit: 'contain', marginBottom: '16px' }} src={props.data.Poster} alt={props.data.Title + '\'s Movie Poster'}/>
            </Paper>
        </Grid>
    )
}

movieColumn.propTypes = {

}

export default movieColumn
