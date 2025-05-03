import React from "react";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import { ProductsPage } from "./screens/productsPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import "../css/app.css";
import "../css/navbar.css";
import { HelpPage } from "./screens/helpPage";
import { OrdersPage } from "./screens/orderPage";
import { UserPage } from "./screens/userPage";
import Footer from "./components/footer";
import HomePage from "./screens/homePage";


function App() {
 const location = useLocation();

  return (
    <>
     {location.pathname === "/" ? <HomeNavbar/> : <OtherNavbar/>}
     <Switch>
       <Route path="/products">
         <ProductsPage />
       </Route>
       <Route path="/orders">
         < OrdersPage/>
       </Route>
       <Route path="/member-page">
         < UserPage/>
       </Route>
       <Route path="/help">
         < HelpPage/>
       </Route>
       <Route path="/">
         <HomePage />
       </Route>
     </Switch>
     <Footer/>
    </>
  );
}

export default App;
