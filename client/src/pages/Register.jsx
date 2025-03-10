import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import {
  Box,
  Typography,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Alert,
  Collapse,
} from "@mui/material";

const Register = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  //media
  const isNotMobile = useMediaQuery("(min-width: 1000px)");
  // states
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  //register ctrl
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/register", {
        username,
        email,
        password
      });
      toast.success("User Registered Successfully");
      navigate("/login");
    } catch (err) {
      console.log(error);
      if (err.response.data.error) {
        setError(err.response.data.error);
      } else if (err.message) {
        setError(err.message);
      }
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };
  return (
    

    <Box
    width={isNotMobile ? "40%" : "80%"}
    p={"2rem"}
    m={"2rem auto"}
    borderRadius={5}
    // sx={{ boxShadow: 5 }}
    backgroundColor={'365359'}
  >
    <Collapse in={error !== ''}>
      <Alert severity="error" sx={{ mb: 2 }}>
        {error}
      </Alert>
    </Collapse>
    <form onSubmit={handleSubmit}>
      <Typography variant="h2" className="text-primary text-left text-lg">
        <span style={{ color: '#60bf70' , fontFamily: 'cursive'}}>Register</span>
      </Typography>
      <TextField
        label="Username"
        type="username"
        required
        margin="normal"
        fullWidth
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <TextField
        label="Email"
        type="email"
        required
        margin="normal"
        fullWidth
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        label="Password"
        type="password"
        required
        margin="normal"
        fullWidth
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        sx={{ color: "white", backgroundColor: "#60bf70", mt: 2 }}
        className="rounded px-7 py-3 text-sm font-medium uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
      >
        Register
      </Button>
      <Typography mt={2}>
        Already have an account ? <Link to="/login" className="text-primary">Login</Link>
      </Typography>
    </form>
  </Box>
  

  );
};

export default Register;
