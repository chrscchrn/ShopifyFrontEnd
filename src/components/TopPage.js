// This page should take up like 20% of the vh
// props is the current func of the webpage
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types'
import CustomizedSwitches from './Switch';
import Headers from './Headers';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      height: '22vh',
      width: '100%',
      overflow: 'hidden',
    },
    header: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.primary,
    },
}));



const TopPage = props => {
    
    const classes = useStyles();

    const [state, setState] = React.useState({ title: 'Search for Movies' });

    function handleTitleChange(isNom) {
        if (!isNom) {
            setState({ ...state, title: 'Search for Movies'});
        } else {
            setState({ ...state, title: 'Your Nomz'});
        }
    }

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <CustomizedSwitches handleTitleChange={handleTitleChange}/>
                </Grid>
                <Grid item xs={6} className={classes.header}>
                    <Headers variant="h2" component="h2">{state.title}</Headers>
                </Grid>
                <Grid item xs={3}/>
            </Grid>
        </div>
    )
}

TopPage.propTypes = {
    title: PropTypes.string
}

export default TopPage
