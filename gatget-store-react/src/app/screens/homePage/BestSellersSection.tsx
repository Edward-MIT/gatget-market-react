import React from "react";
import { Box, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardContent, Button } from "@mui/material";
import "../../../css/homePage.css";

const bestSellers = [
  { id: 1, name: "iPhone 14 Pro", price: "$999", image: "/images/best-iphone.png" },
  { id: 2, name: "MacBook Pro M2", price: "$1999", image: "/images/best-macbook.png" },
  { id: 3, name: "Sony WH-1000XM5", price: "$399", image: "/images/best-headphones.png" },
  { id: 4, name: "Samsung Galaxy Watch 5", price: "$299", image: "/images/best-watch.png" }
];

const BestSellersSection = () => {
  return (
    <Box className="best-sellers-section">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          Best Sellers
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {bestSellers.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card className="best-seller-card">
                <CardActionArea>
                  <CardMedia component="img" image={product.image} alt={product.name} className="best-seller-image" />
                  <CardContent>
                    <Typography variant="h6" className="best-seller-name" align="center">
                      {product.name}
                    </Typography>
                    <Typography variant="body1" className="best-seller-price" align="center">
                      {product.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <Box textAlign="center" p={2}>
                  <Button variant="contained" color="primary">Buy Now</Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BestSellersSection;