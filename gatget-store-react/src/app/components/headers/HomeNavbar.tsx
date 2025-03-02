import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Stack, Box, Button } from "@mui/material";
import "../../../css/app.css";

export function HomeNavbar() {
  const authMember = null;

    return (
      <div className="home-navbar">
        <Container sx={{ mt: "20px", height: "80px" }}>
          <Stack
            sx={{ height: "100%" }}
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <NavLink to="/">
                <img
                  style={{ width: "140px", height: "35px" }}
                  src="/icons/gadget-store-logo.svg"
                  alt="Gadget Store Logo"
                />
              </NavLink>
            </Box>
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              minWidth="600px"
              alignItems="center"
            >
              <Box className="hover-line">
                <NavLink to="/" activeClassName="underline">Home</NavLink>
              </Box>
              <Box className="hover-line">
                <NavLink to="/products" activeClassName="underline">Products</NavLink>
              </Box>
              {authMember && (
                <Box className="hover-line">
                  <NavLink to="/orders" activeClassName="underline">Orders</NavLink>
                </Box>
              )}
              {authMember && (
                <Box className="hover-line">
                  <NavLink to="/member-page" activeClassName="underline">My Page</NavLink>
                </Box>
              )}
              <Box className="hover-line">
                <NavLink to="/help" activeClassName="underline">Help</NavLink>
              </Box>
              <Box className="hover-line">
                <NavLink to="/contact" activeClassName="underline">Contact</NavLink>
              </Box>
            </Stack>
            <Stack flexDirection="row" gap={2}>
              {!authMember ? (
                <>
                  <Button
                    variant="contained"
                    sx={{ background: "#3776CC", color: "#f8f8ff" }}
                  >
                    Login
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ borderColor: "#3776CC", color: "#3776CC" }}
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <img src="/icons/user-avatar.svg" alt="User Avatar" style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
              )}
            </Stack>
          </Stack>
        </Container>
      </div>
    );
  }

export default HomeNavbar;





// import { Link } from "react-router-dom";

// export function HomeNavbar () {
//   return (<div>
//     <nav className="navbar">
//       <div className="container">
//         <h1 className="logo">Gadget Market</h1>
//         <ul className="nav-links">
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
//   </div>)
// }