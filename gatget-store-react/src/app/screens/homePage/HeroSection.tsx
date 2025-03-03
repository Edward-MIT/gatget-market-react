import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import "../../../css/homePage.css";

const HeroSection = () => {
  return (
    <Box className="hero-section">
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          alignItems="center"
          justifyContent="space-between"
          spacing={4}
        >
          {/* TEXT SECTION */}
          <Box className="hero-text">
            <Typography variant="h3" className="hero-title">
              Discover the Future of Tech
            </Typography>
            <Typography variant="body1" className="hero-subtitle">
              The best gadgets at unbeatable prices. Upgrade your lifestyle today!
            </Typography>
            <Stack direction="row" spacing={2} className="hero-buttons">
              <Button variant="contained" color="primary" size="large">
                Shop Now
              </Button>
              <Button variant="outlined" color="primary" size="large">
                Explore Products
              </Button>
            </Stack>
          </Box>

          {/* IMAGE SECTION */}
          <Box className="hero-image">
            <img src="/images/hero-banner.png" alt="Gadget Store" />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HeroSection;
