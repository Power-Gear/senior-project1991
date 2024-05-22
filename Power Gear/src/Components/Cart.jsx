import React from 'react';
import { Typography, List, ListItem, ListItemText, Button } from '@mui/material';

// Assuming you have a cart state management solution (e.g., Redux or Context API)
function Cart() {
  const cartItems = getCartItems(); // Replace with your logic to fetch cart items

  if (cartItems.length === 0) {
    return <div>Your cart is empty!</div>;
  }

  return (
    <div>
      <Typography variant="h5">Your Shopping Cart</Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.name}
              secondary={`Quantity: ${item.quantity} - Price: $${item.price * item.quantity}`}
            />
          </ListItem>
        ))}
      </List>
      <Button variant="contained">Checkout</Button>
    </div>
  );
}

export default Cart;