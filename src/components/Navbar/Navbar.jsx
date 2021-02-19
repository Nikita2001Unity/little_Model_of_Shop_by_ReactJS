import React from 'react';

import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

import logo from '../../assets/navIcon.png';

import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles'

function Navbar({totalItems}) {
    const classes = useStyles();

    const location = useLocation();
    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.appBar} color="inherit">
                        <img src={logo} alt="Commerce.js" height="35px" className={classes.image}/>
                        ShoppingWorld
                    </Typography>
                    <div className={classes.grow} />
                    {location.pathname === '/' && (
                    <div className={classes.button}>
                        <Link to="/cart"></Link>
                        <IconButton component={Link} to="/cart" aria-label ="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCartIcon />
                            </Badge>
                        </IconButton>
                    </div>)}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
 