import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& > * + *': {
        marginTop: theme.spacing(4),
        },
    },
}));

export default function CustomizedSnackbars(props) {
    const classes = useStyles();
    const [ open, setOpen ] = React.useState(false);
    const [ state ] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });

    const { vertical, horizontal } = state;

    React.useEffect(() => {
        setOpen(props.open);
    }, [props.open])

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
        props.close();
    };

    return (
        <div className={classes.root}>
            <Snackbar 
                open={open} 
                autoHideDuration={6000} 
                onClose={handleClose} 
                key={vertical + horizontal}
                anchorOrigin={{ vertical, horizontal }}>
                <Alert onClose={handleClose} severity={props.severity}> 
                {props.message}
                </Alert>
            </Snackbar>
        </div>
    );
}

CustomizedSnackbars.propTypes = {
    message: PropTypes.string,
    severity: PropTypes.string,
    open: PropTypes.bool,
    close: PropTypes.func,
}