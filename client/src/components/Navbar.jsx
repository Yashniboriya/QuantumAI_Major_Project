import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
const Navbar = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  //handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logged out successfully ");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      width={"100%"}
      backgroundColor={theme.palette.background.alt}
      p="1rem 6%"
      textAlign={"center"}
      // sx={{ boxShadow: 3, mb: 2 }}
      className="flex flex-row items-center justify-between"
    >
      <Typography variant="h2" color="#60bf70" fontWeight="medium" className="text-lg">
        <Link to={'/'} style={{ color: '#60bf70', textDecoration: 'none', fontFamily: 'cursive' }}>Quantum AI</Link>
      </Typography>
      {loggedIn ? (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', fontSize: '15px' }}>
          <NavLink to="/" p={1} style={{ textDecoration: 'none', color: 'black' }} >
            Home
          </NavLink>
          <NavLink to="/login" onClick={handleLogout} p={1} style={{ textDecoration: 'none', color: 'black' }}>
            Logout
          </NavLink>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px', fontSize: '15px' }}>
          <NavLink to="/" p={1} style={{ textDecoration: 'none', color: 'black' }} >
            Home
          </NavLink>
          <NavLink to="/register" p={1} style={{ textDecoration: 'none', color: 'black' }} >
            Register
          </NavLink>
          <NavLink to="/login" p={1} style={{ textDecoration: 'none', color: 'black' }} >
            Login
          </NavLink>
        </div>
      )}
    </Box>

  );
};

export default Navbar;
