import React, { useState } from "react";
import { Box, Button, Stack, IconButton, Badge, Menu } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CancelIcon from "@mui/icons-material/Cancel";
import "../../../css/basket.css";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  img: string;
}

export default function Basket() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: 1, name: "iPhone 15 Pro", price: 999, quantity: 1, img: "/img/iphone15.jpg" },
    { id: 2, name: "AirPods Pro", price: 249, quantity: 1, img: "/img/airpods.jpg" },
  ]);

  const open = Boolean(anchorEl);

  /** HANDLERS **/
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const increaseQuantity = (id: number) => {
    setCartItems(cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const decreaseQuantity = (id: number) => {
    setCartItems(cartItems.map((item) =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ));
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box>
      <IconButton aria-label="cart" onClick={handleClick}>
        <Badge badgeContent={cartItems.length} color="primary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          elevation: 3,
          sx: {
            width: "320px",
            padding: "10px",
            mt: 1.5,
          },
        }}
      >
        <Stack className="basket-frame">
          {cartItems.length === 0 ? (
            <Box className="empty-cart">Cart is empty!</Box>
          ) : (
            <>
              <Box className="orders-main-wrapper">
                {cartItems.map((item) => (
                  <Box key={item.id} className="basket-info-box">
                    <IconButton className="cancel-btn" onClick={() => removeItem(item.id)}>
                      <CancelIcon color="primary" />
                    </IconButton>
                    <img src={item.img} className="product-img" alt={item.name} />
                    <span className="product-name">{item.name}</span>
                    <p className="product-price">${item.price} x {item.quantity}</p>
                    <Box className="quantity-controls">
                      <button onClick={() => decreaseQuantity(item.id)} className="remove">-</button>
                      <button onClick={() => increaseQuantity(item.id)} className="add">+</button>
                    </Box>
                  </Box>
                ))}
              </Box>
              <Box className="basket-order">
                <span className="price">Total: ${totalAmount}</span>
                <Button startIcon={<ShoppingCartIcon />} variant="contained">
                  Checkout
                </Button>
              </Box>
            </>
          )}
        </Stack>
      </Menu>
    </Box>
  );
}
