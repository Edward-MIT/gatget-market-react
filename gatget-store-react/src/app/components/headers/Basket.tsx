import React from "react";
import {
  Box,
  Button,
  Stack,
  IconButton,
  Badge,
  Menu,
  Typography,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useHistory } from "react-router-dom";
import "../../../css/navbar.css"

export default function Basket() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // Dummy basket data
  const cartItems = [
    {
      id: 1,
      name: "Rose Bouquet",
      image: "https://tse1.mm.bing.net/th?id=OIF.YCu94KimPjqj8ABQzYgy0g&pid=Api&P=0&h=220",
      price: 25,
      quantity: 2,
    },
  ];

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <Box>
      <IconButton
        aria-label="cart"
        onClick={handleClick}
        sx={{ color: "inherit" }}
      >
        <Badge badgeContent={cartItems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            width: 320,
            p: 2,
            mt: 1.5,
            borderRadius: 2,
            boxShadow: 4,
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Stack gap={2}>
          {cartItems.length === 0 ? (
            <Typography textAlign="center">Cart is empty!</Typography>
          ) : (
            cartItems.map((item) => (
              <Box key={item.id} sx={{ position: "relative" }}>
                <IconButton
                  size="small"
                  sx={{ position: "absolute", top: 0, right: 0 }}
                >
                  <CancelIcon fontSize="small" />
                </IconButton>
                <Stack direction="row" spacing={2} alignItems="center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{ width: 60, height: 60, borderRadius: 8 }}
                  />
                  <Box>
                    <Typography fontWeight="bold">{item.name}</Typography>
                    <Typography variant="body2">
                      ${item.price} × {item.quantity}
                    </Typography>
                    <Stack direction="row" spacing={1} mt={1}>
                      <Button size="small" variant="outlined">-</Button>
                      <Button size="small" variant="outlined">+</Button>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            ))
          )}

          <Box textAlign="right">
            <Typography fontWeight="bold" mb={1}>
              Total: ${totalPrice}
            </Typography>
            <Button
              fullWidth
              variant="contained"
              startIcon={<ShoppingCartIcon />}
              onClick={() => history.push("/checkout")}
            >
              Order
            </Button>
          </Box>
        </Stack>
      </Menu>
    </Box>
  );
}
