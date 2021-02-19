import React from 'react';

import useStyle from './styles';

import {Container, Typography, Button, Grid} from "@material-ui/core";
import CartItem from './CartItem/CartItem';

import {Link} from 'react-router-dom';


const Cart = ({cart, handleUpdateCartQty,handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyle();
    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You added no items! 
            <Link to="/" className={classes.link}> Let`s do iT!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items.map((item) => (
                <Grid item xs = {12} sm={4} key={item.is} >
                    <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} handleRemoveFromCart={handleRemoveFromCart}/>
                </Grid>
            ))}
        </Grid>
        <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} color="secondary" size="large" type="button" variant="contained" onClick={handleEmptyCart}>
                        Empty cart
                    </Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} color="primary" size="large" type="button" variant="contained">
                        Checkout
                    </Button>
                </div>
        </div>
        </>
    );

    if(!cart.line_items) return 'Loading...'
    return (
        <Container>
            <div  className={classes.toolbar}/>

            <Typography className={classes.title} gutterBottom variant="h3"> 
                Your Shopping Cart
            </Typography>
            { !cart.line_items.length? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart