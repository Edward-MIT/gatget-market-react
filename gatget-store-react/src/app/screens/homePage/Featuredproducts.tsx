import React from "react";
import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import "../../../css/homePage.css";

const products = [
  { id: 1, name: "iPhone 14 Pro", price: "$999", image: "/images/iphone14pro.jpg" },
  { id: 2, name: "Samsung Galaxy S23", price: "$799", image: "/images/iphone14pro.jpg" },
  { id: 3, name: "MacBook Air M2", price: "$1199", image: "/images/iphone14pro.jpg" },
  { id: 4, name: "Sony WH-1000XM5", price: "$399", image: "/images/iphone14pro.jpg" }
];

const FeaturedProducts = () => {
  return (
    <Box className="featured-products">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          Featured Products
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <Card className="product-card">
                <CardMedia component="img" image={product.image} alt={product.name} className="product-image" />
                <CardContent>
                  <Typography variant="h6" className="product-name">
                    {product.name}
                  </Typography>
                  <Typography variant="body1" className="product-price">
                    {product.price}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">
                    Buy Now
                  </Button>
                  <Button size="small" variant="outlined" color="primary">
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
