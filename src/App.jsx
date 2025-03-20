import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { AppBar, Toolbar, Button, Badge, Container, Box, Typography } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import CartProvider, { CartContext } from "./context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  return (
    <AppBar position="static" sx={{ backgroundColor: "#1976d2" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
          <Typography variant="h6" component="div">
            ReactJS Shopping Cart
          </Typography>
        </Box>
        <Button color="inherit" component={Link} to="/cart">
          <Badge badgeContent={cart.length} color="error">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Container sx={{ marginTop: "20px" }}>
          <BrowserRouter basename="/ReactJS-Shopping-Cart-Project">
          <Routes>
            <Route path="/ReactJS-Shopping-Cart-Project" element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
          </BrowserRouter>
        </Container>
      </Router>
    </CartProvider>
  );
};

export default App;
