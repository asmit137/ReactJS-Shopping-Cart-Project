import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Snackbar,
  Grid,
  TextField,
  Divider,
  Paper,
} from "@mui/material";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((acc, item) => acc + item.qty * item.price, 0);

  const handleCheckout = () => {
    clearCart();
    setOpen(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <Box sx={{ padding: "30px", minHeight: "100vh", backgroundColor: "#f4f6f8" }}>
      

      {cart.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", color: "gray" }}>
          Your cart is empty.
        </Typography>
      ) : (
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={8}>
            {cart.map((item) => (
              <Card
                key={item.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  padding: "15px",
                  marginBottom: "15px",
                  borderRadius: "10px",
                  boxShadow: 2,
                  backgroundColor: "white",
                }}
              >
                {item.image && (
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.name}
                    sx={{ width: 100, height: 100, borderRadius: "8px", marginRight: "20px" }}
                  />
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: ₹{item.price}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                    <Typography variant="body2" sx={{ fontWeight: "bold" }}>
                      Qty:
                    </Typography>
                    <TextField
                      type="number"
                      value={item.qty}
                      onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                      inputProps={{ min: 1 }}
                      size="small"
                      sx={{ width: "60px", marginLeft: "10px" }}
                    />
                  </Box>
                  <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: "10px" }}>
                    Total: ₹{item.qty * item.price}
                  </Typography>
                  <Button
                    variant="contained"
                    color="error"
                    onClick={() => removeFromCart(item.id)}
                    sx={{ marginTop: "10px" }}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ padding: "20px", borderRadius: "10px", backgroundColor: "white" }}>
              <Typography variant="h5" sx={{ fontWeight: "bold", textAlign: "center", marginBottom: "10px" }}>
                Order Summary
              </Typography>
              <Divider />
              <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                <Typography variant="body1">Total Items:</Typography>
                <Typography variant="body1">{cart.length}</Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  Total Price:
                </Typography>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  ₹{totalPrice}
                </Typography>
              </Box>

              <Button
                variant="contained"
                color="success"
                fullWidth
                sx={{ marginTop: "20px", padding: "12px", fontSize: "16px" }}
                onClick={handleCheckout}
              >
                Checkout
              </Button>
            </Paper>
          </Grid>
        </Grid>
      )}

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message="Your order has been placed successfully! Redirecting to Home..."
      />
    </Box>
  );
};

export default Cart;
