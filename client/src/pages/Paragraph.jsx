
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
} from "@mui/material";

const Paragraph = () => {
  const [query, setQuery] = useState('');
  const [chatResult, setChatResult] = useState(null);
  const [error, setError] = useState(null);
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/chats/search?q=${query}`);
      if (response.data.message === 'Chat not found') {
        setError('Chat not found');
        setChatResult(null);
        return;
      }
      setChatResult(response.data);
      setError(null);
    } catch (error) {
      setError('Internal Server Error');
      setChatResult(null);
    }
  };

  return (
    !loggedIn ? (
      <Box p={10} sx={{ display: 'flex', justifyContent: 'center', alignContent: 'flex-start' }}>
        <Typography variant="h3">
          Please
          <Link to={'/login'} >Log In</Link>
          to Continue
        </Typography>
      </Box>
    ) :
    <div>
      <h1>Type to Generate Info 👇</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {chatResult && (
        <div className="result-container"> 
        <div className="result">
          <h2>{chatResult.name}</h2>
          <p>{chatResult.message}</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default Paragraph;
