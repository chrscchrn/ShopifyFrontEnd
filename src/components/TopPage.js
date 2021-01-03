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
      marginTop: 64,
      backgroundColor: '#DADED4',
      color: '#3C403D',
    },
    bigHeader: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#3C403D',
    },
}));


const TopPage = props => {
    
    const classes = useStyles();
    const gold = React.useRef(false);
    const [state, setState] = React.useState({ title: 'Search for Movies' });
    
    function handleTitleChange(isNom) {
        if (!isNom) {
            setState({ ...state, title: 'Search for Movies'});
            props.handleSwitch(true);
        } else {
            setState({ ...state, title: 'Your Nominations'});
            props.handleSwitch(false);
        }
    }
    
    React.useEffect(() => {
        if (props.gold !== undefined) {
            gold.current = props.gold;
            setState({ ...state, gold: gold.current });
        }
    }, [props.gold])
    
    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <CustomizedSwitches handleTitleChange={handleTitleChange}/>
                </Grid>
                <Grid item xs={6} className={classes.bigHeader}>
                    <Headers variant="h2" component="h2">{state.title}</Headers>
                </Grid>
                <Grid item xs={3}>
                    {state.gold === false
                    ? <Headers variant="h4" component="h4">{props.totalNominations}/5 <br/>Nominations</Headers>
                    : <Headers variant="h4" component="h4">{props.totalNominations}/5 <br/>Nominations</Headers> }
                     {/*make the bottom one gold  */}
                </Grid>
            </Grid>
        </div>
    )
}

TopPage.propTypes = {
    title: PropTypes.string,
    gold: PropTypes.bool,
}

export default TopPage
