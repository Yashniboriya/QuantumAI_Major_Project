import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { Box, Typography, TextField, Button, Alert, Collapse } from "@mui/material";
import './style.css';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/v1/auth/login", { email, password });
      toast.success("Logged in Successfully");
      localStorage.setItem("authToken", true);
      navigate("/");
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
    <section className="h-screen">
      <div className="container h-full px-6 py-24">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
            <form onSubmit={handleSubmit}>
              <Collapse in={error !== ''}>
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              </Collapse>
              <Typography variant="h1" className="mb-3 text-primary text-left text-lg">
                <span style={{ color: '#60bf70' , fontFamily: 'cursive'}}>Login</span>
              </Typography>
              <TextField
                label="Email"
                type="email"
                fullWidth
                required
                className="mb-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                className="mb-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                size="large"
                sx={{ color: "white", backgroundColor: "#60bf70", mb: 2 }}
                className="rounded px-7 py-3 text-sm font-medium uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 focus:bg-primary-600 focus:outline-none focus:ring-0 active:bg-primary-700"
              >
                Sign in
              </Button>
              <Typography mt={2}>
                Don't have an account? <Link to="/register" className="text-primary">Register</Link>
              </Typography>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
