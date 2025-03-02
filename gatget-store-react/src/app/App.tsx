import React from "react";
import "../css/app.css";
import { Box, Button, Container, Stack } from "@mui/material";
import { RippleBadge } from "./MaterialTheme/styled";
import { Link, Route, Switch, useLocation } from "react-router-dom";
import "../css/app.css";
import { HomePage } from "./screens/homePage";
import { UserPage } from "./screens/userPage";
import { OrdersPage } from "./screens/orderPage";
import { ProductsPage } from "./screens/productsPage";
import { HomeNavbar } from "./components/headers/HomeNavbar";
import { OtherNavbar } from "./components/headers/OtherNavbar";
import { Footer } from "./components/footer";
import { HelpPage } from "./screens/helpPage";
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
          <HelpPage/>
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
// import { Link } from "react-router-dom";


// const Navbar = () => {
//   return (
//     <nav className="navbar">
//       <div className="container">
//         <h1 className="logo">Gadget Market</h1>
//         <ul className="nav-links">
//           <li>
//             <Link to="/" className="nav-item">Home</Link>
//           </li>
//           <li>
//             <Link to="/products" className="nav-item">Products</Link>
//           </li>
//           <li>
//             <Link to="/orders" className="nav-item">Orders</Link>
//           </li>
//           <li>
//             <Link to="/mypage" className="nav-item">My Page</Link>
//           </li>
//           <li>
//             <Link to="/login" className="nav-item login">Login</Link>
//           </li>
//           <li>
//             <Link to="/signup" className="nav-item signup">Sign Up</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
