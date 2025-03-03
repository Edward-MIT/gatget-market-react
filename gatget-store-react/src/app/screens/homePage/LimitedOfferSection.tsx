import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";
import "../../../css/homePage.css";


const LimitedOfferSection = () => {
  return (
    <Box className="limited-offer-section">
      <Container className="limited-offer-container">
        <Box className="offer-text">
          <Typography variant="h4" className="offer-title">
            Limited Time Offer!
          </Typography>
          <Typography variant="body1" className="offer-description">
            Get up to <strong>50% OFF</strong> on selected gadgets. Hurry up, before the deal ends!
          </Typography>
          <Button variant="contained" color="primary" className="shop-now-button">
            Shop Now
          </Button>
        </Box>
        <Box className="offer-image-box">
          <img src="/images/limited-offer.png" alt="Limited Offer" className="offer-image" />
        </Box>
      </Container>
    </Box>
  );
};

export default LimitedOfferSection;
