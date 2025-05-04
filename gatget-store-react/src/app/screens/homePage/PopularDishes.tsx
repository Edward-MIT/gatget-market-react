import React from "react";
import { Box, Container, Stack } from "@mui/material";
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import {CssVarsProvider} from "@mui/joy/styles"
import CardOverflow  from "@mui/joy/CardOverflow";
import VisibilityIcon from "@mui/icons-material/Visibility"
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const list = [
  {productName: "Rose Bouquet", imagePath: "https://i5.walmartimages.com/asr/0aec46e0-fc9c-45b5-9efc-478ee3cc194c_2.64ab59a09aa0ab0249213e5af67ac0ab.jpeg"},
  {productName: "Tulib Basket", imagePath: "https://png.pngtree.com/png-vector/20240911/ourmid/pngtree-basket-of-colorful-tulips-png-image_13811498.png"},
  {productName: "Mixsed Flowers", imagePath: "https://www.qronfla.com/wp-content/uploads/2020/04/mixed-bouquet.jpg"},
  {productName: "Sunflower Basket", imagePath: "https://cdn.igp.com/f_auto,q_auto,t_prodl/products/p-sunflower-basket-104922-m.jpg"},
];

export default function PopularDishes() {
  return(
  <div className="popular-dishes-frame">
    <Container>
     <Stack className="popular-section">
      <Box className="category-title">Top rated Flowers</Box>
      <Stack className="cards-frame">
        {list.map((ele, index) =>{
          return (
            <CssVarsProvider key={index}>
              <Card className={"card"}>
                <CardCover>
                  <img src={ele.imagePath} alt="" />
                </CardCover>
                <CardCover className={"card-cover"}/>
                <CardContent sx={{justifyContent: "flex-end"}}>
                  <Stack
                  flexDirection={"row"}
                  justifyContent={"space-between"}
                  >
                    <Typography
                    level="h2"
                    fontSize="lg"
                    textColor="#fff"
                    mb={1}
                    >
                      {ele.productName}
                    </Typography>
                    <Typography
                    sx={{
                      fontWeight:"md",
                      color:"neutral.300",
                      alignItems:"center",
                      display: "flex",
                    }}
                    >
                      20
                      <VisibilityIcon
                      sx={{fontSize:25, marginRight:"5px"}}
                      />
                    </Typography>
                  </Stack>
                </CardContent>
                <CardOverflow
                sx={{
                  display: "flex",
                  gap: 1.5,
                  py: 1.5,
                  px: "var(--Card-padding)",
                  borderTop: "1px solid",
                  height: "60px",
                }}
                >
                  <Typography
                     startDecorator=   {<DescriptionOutlinedIcon/>}
                     textColor="neutral.300"
                  >
                    This is beautiful flower
                  </Typography>

                </CardOverflow>
              </Card>
            </CssVarsProvider>
          );
        })}
      </Stack>
     </Stack>
    </Container>
  </div>);
}