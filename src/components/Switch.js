import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Headers from './Headers';

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 96,
    height: 50,
    padding: 2,
    display: 'flex',
    overflow: 'initial',
  },
  switchBase: {
    padding: 0,
    color: '#fff',
    '&$checked': {
      transform: 'translateX(48px)',
      color: 'white', // keep white
      // border: "1px solid #39603D",
      '& + $track': {
        opacity: 1,
        backgroundColor: '#39603D',
        // borderColor: '#39603D',
      },
    },
  },
  thumb: {
    width: 48,
    height: 50,
    boxShadow: 'none',
  },
  track: {
    border: `1px solid #A3BCB6`,
    borderRadius: 32,
    opacity: 1,
    backgroundColor: "#A3BCB6",
  },
  checked: {},
}))(Switch);

export default function CustomizedSwitches(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: false,
  });

  function handleChange(event) {
    props.handleTitleChange(!state.checkedC);
    setState({ ...state, [event.target.name]: event.target.checked });
  }

  return (
    <FormGroup>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item><Headers variant="h5" component="h4">Search</Headers></Grid>
          <Grid item>
            <AntSwitch checked={state.checkedC} onChange={handleChange} name="checkedC" />
          </Grid>
          <Grid item><Headers variant="h5" component="h4">Noms</Headers></Grid>
        </Grid>
      </Typography>
    </FormGroup>
  );
}