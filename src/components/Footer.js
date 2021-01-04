import React from 'react'
import { Typography } from '@material-ui/core'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    link: {
        "&:hover, &:focus, &:visited, &:active": {
            textDecoration: 'none',
            color: '#39603D',
        },
    },
}));

const Footer = () => {

    const classes = useStyles();

    return (
        <footer style={{ margin: '8vh 0', textAlign: 'center' }}>
            <Typography variant="h6">
                <a  className={classes.link}
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://cochranc.com">Cochranc.com</a>
                <br/>
                <a  className={classes.link}
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://twitter.com/intent/tweet?text=https%3A//chrscchrn.github.io/ShopifyFrontEnd/"><TwitterIcon/></a>
                {' '}
                <a  className={classes.link}
                    target="_blank" 
                    rel="noreferrer" 
                    href="https://www.facebook.com/sharer/sharer.php?u=https%3A//chrscchrn.github.io/ShopifyFrontEnd/"><FacebookIcon/></a>
                {' '}
                <a  className={classes.link}
                    target="_blank" 
                    rel="noreferrer" 
                    href="http://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fchrscchrn.github.io%2FShopifyFrontEnd%2F&title="><LinkedInIcon/></a>
            </Typography>
        </footer>
    )
}

export default Footer
