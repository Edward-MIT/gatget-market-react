import React from "react";
import { Box, Container, Grid, Typography, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import "../../../css/homePage.css";

const categories = [
  { id: 1, name: "Smartphones", image: "/images/category-smartphones.png" },
  { id: 2, name: "Laptops", image: "/images/category-laptops.png" },
  { id: 3, name: "Headphones", image: "/images/category-headphones.png" },
  { id: 4, name: "Watches", image: "/images/category-watches.png" }
];

const CategoriesSection = () => {
  return (
    <Box className="categories-section">
      <Container>
        <Typography variant="h4" className="section-title" align="center">
          Shop by Categories
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {categories.map((category) => (
            <Grid item key={category.id} xs={12} sm={6} md={3}>
              <Card className="category-card">
                <CardActionArea>
                  <CardMedia component="img" image={category.image} alt={category.name} className="category-image" />
                  <CardContent>
                    <Typography variant="h6" className="category-name" align="center">
                      {category.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoriesSection;
