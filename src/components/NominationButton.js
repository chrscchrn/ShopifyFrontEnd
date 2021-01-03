import React from 'react'
import Button from '@material-ui/core/button'
import { Typography } from '@material-ui/core'

const NominationButton = (props) => {
    return (
        <div>
            <Button variant="contained" color="secondary" onClick={props.click}>
                <Typography style={{ color: 'white' }}>Nominate</Typography>
            </Button>
        </div>
    )
}

export default NominationButton
