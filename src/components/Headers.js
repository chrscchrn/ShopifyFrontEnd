import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    textShadow: "1px 1px #0000002b",
  },
}));

const Headers = props => {
    const classes = useStyles();

    return (
        <Typography className={classes.title} variant={props.variant} component={props.component}>
            {props.children}
        </Typography>
    )
}

Headers.propTypes = {
    variant: PropTypes.string,
    component: PropTypes.string
}

export default Headers