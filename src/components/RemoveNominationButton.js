import React from 'react'
import Button from '@material-ui/core/button'
import { Typography } from '@material-ui/core'

const RemoveNominationButton = (props) => {
    return (
        <div>
            <Button variant="contained" color="default" onClick={props.click}>
                <Typography style={{ color: 'black' }}>REM</Typography>
            </Button>
        </div>
    )
}

export default RemoveNominationButton