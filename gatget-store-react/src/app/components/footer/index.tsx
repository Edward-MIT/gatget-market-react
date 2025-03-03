import React from "react";
import { Container, Stack, Box, Typography } from "@mui/material";
import "../../../css/footer.css";

export function Footer() {
  return (
    <div className="footer">
      <Container>
        <Stack
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ padding: "20px 0" }}
        >
          <Box>
            <img
              src="/icons/gadget-store-logo.svg"
              alt="Gadget Store Logo"
              style={{ width: "140px", height: "35px" }}
            />
          </Box>
          <Stack flexDirection="row" gap={4}>
            <Typography variant="body2">
              <a href="/about">About Us</a>
            </Typography>
            <Typography variant="body2">
              <a href="/privacy">Privacy Policy</a>
            </Typography>
            <Typography variant="body2">
              <a href="/terms">Terms & Conditions</a>
            </Typography>
            <Typography variant="body2">
              <a href="/contact">Contact</a>
            </Typography>
          </Stack>
          <Typography variant="body2" color="gray">
            © 2025 Gadget Store. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </div>
  );
}

export default Footer;
