import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  Snackbar,
  Rating,
  Box,
} from "@mui/material";
import laptop from "./images/laptop.jpeg";
import phone from "./images/phone.jpeg";
import headphone from "./images/headphone.jpeg";
import macbook from "./images/macbook.jpeg";
import earphone from "./images/earphone.png";
import iphone from "./images/iphone.jpeg";
import tv from "./images/tv.jpeg";

const products = [
  { id: 1, name: "HP 247 G8 Notebook PC", price: 50000, image: laptop, rate: 4.9 },
  { id: 2, name: "Samsung Galaxy A15 5G (Blue, 8GB, 128GB Storage)", price: 30000, image: phone, rate: 3.5 },
  { id: 3, name: "AUDEZE Maxwell Wireless Gaming Headset", price: 5000, image: headphone, rate: 4.5 },
  { id: 4, name: "Apple MacBook Pro 14 with M3", price: 80000, image: macbook, rate: 5.0 },
  { id: 5, name: "Beats Flex – Wireless Earphones - Beats Black", price: 1000, image: earphone, rate: 4.5 },
  { id: 6, name: "Apple iPhone 14 (128 GB) - Starlight", price: 100000, image: iphone, rate: 4.6 },
  { id: 7, name: "Intex LED-3243, 32 Inch HD TV", price: 73000, image: tv, rate: 4.3 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleAddToCart = (product) => {
    addToCart(product);
    setMessage(`${product.name} added to the cart!`);
    setOpen(true);
  };

  return (
    <>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(280px, 1fr))"
        gap={4}
        p={4}
        justifyContent="center"
      >
        {products.map((product) => (
          <Card
            key={product.id}
            sx={{
              maxWidth: 300,
              mx: "auto",
              boxShadow: 4,
              borderRadius: 3,
              transition: "transform 0.3s ease-in-out",
              "&:hover": { transform: "scale(1.05)" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                height: 200, // Fixed height for images
                width: "100%",
                objectFit: "contain",
                padding: 2,
                background: "#f5f5f5",
                borderTopLeftRadius: "12px",
                borderTopRightRadius: "12px",
              }}
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {product.name}
              </Typography>
              <Rating value={product.rate} precision={0.1} readOnly size="small" />
              <Typography variant="h5" color="primary" sx={{ mt: 1 }}>
                ₹{product.price.toLocaleString()}
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2, width: "100%" }}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                sx={{ borderRadius: 2, textTransform: "none", fontWeight: "bold" }}
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      {/* Snackbar Notification */}
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => setOpen(false)}
        message={message}
      />
    </>
  );
};

export default ProductList;
