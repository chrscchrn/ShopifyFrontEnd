import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

const Headers = props => {
    return (
        <Typography variant={props.variant} component={props.component}>
            {props.children}
        </Typography>
    )
}

Headers.propTypes = {
    variant: PropTypes.string,
    component: PropTypes.string
}

export default Headers
