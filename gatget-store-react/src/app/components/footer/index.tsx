import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FooterWrapper = styled.div`
  width: 100%;
  heigt: auto;
  background:rgb(139, 209, 236); /* pastel pushti */
  padding: 60px 0;
  font-family: 'Poppins', sans-serif;
  color: #333;
  border-top: 1px solid #eee;
`;

const Logo = styled.img`
  width: 120px;
  margin-bottom: 5px;
  margin-top: -50px;
`;

const Description = styled.p`
  max-width: 320px;
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-top: -15px;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 15px;

  img {
    width: 24px;
    height: 24px;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const CategoryTitle = styled.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 15px;
  color: #444;
`;

const CategoryLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  a {
    font-size: 14px;
    color: #666;
    text-decoration: none;

    &:hover {
      color: #d63384; /* flower accent */
    }
  }
`;

const InfoItem = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  color: #555;
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: #ccc;
  opacity: 0.2;
  margin: 40px 0;
`;

const Copyright = styled.div`
  text-align: center;
  font-size: 13px;
  color: #999;
`;

export default function Footer() {
  const authMember = null;

  return (
    <FooterWrapper>
      <Container>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap" gap={4}>
          {/* Left Column */}
          <Stack>
            <Logo src="/icons/logo_beautiful.png" alt="Beautifil Logo" />
            <Description>
              Beautiful.uz brings you the most elegant flowers in harmony with nature. Express love, celebrate life.
            </Description>
            <SocialIcons>
              <img src="/icons/facebook.svg" alt="Facebook" />
              <img src="/icons/instagram.svg" alt="Instagram" />
              <img src="/icons/twitter.svg" alt="Twitter" />
              <img src="/icons/youtube.svg" alt="YouTube" />
            </SocialIcons>
          </Stack>

          {/* Center: Pages */}
          <Stack>
            <CategoryTitle>Bo'limlar</CategoryTitle>
            <CategoryLinks>
              <Link to="/">Bosh sahifa</Link>
              <Link to="/products">Mahsulotlar</Link>
              {authMember && <Link to="/orders">Buyurtmalarim</Link>}
              <Link to="/contact">Aloqa</Link>
            </CategoryLinks>
          </Stack>

          {/* Right: Contact Info */}
          <Stack>
            <CategoryTitle>Biz bilan bog'laning</CategoryTitle>
            <Stack gap={1}>
              <InfoItem><span>📍</span>Yunusobod, Toshkent</InfoItem>
              <InfoItem><span>📞</span>+998 90 123 45 67</InfoItem>
              <InfoItem><span>📧</span>support@beautiful.uz</InfoItem>
              <InfoItem><span>⏰</span>08:00 - 22:00, har kuni</InfoItem>
            </Stack>
          </Stack>
        </Stack>

        <Divider />

        <Copyright>
          © 2025 Beautiful.uz. All rights reserved.
        </Copyright>
      </Container>
    </FooterWrapper>
  );
}
