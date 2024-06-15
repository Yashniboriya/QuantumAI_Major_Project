import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
} from "@mui/material";
const QueryGenerator = () => {
  const [query, setQuery] = useState('');
  const [queryResult, setQueryResult] = useState(null);
  const [error, setError] = useState(null);
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/query/search?q=${query}`);
      
      // Check if the response contains data
      if (!response.data) {
        setError('Query not found');
        setQueryResult(null);
        return;
      }
      
      setQueryResult(response.data);
      setError(null);
    } catch (error) {
      // Check if the error response contains message
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Internal Server Error');
      }
      setQueryResult(null);
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
      <h1>Type to Generate Query 👇</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {queryResult && (
        <div className="result-container"> 
        <div className="result">
          <h2>{queryResult.name}</h2>
          <p>{queryResult.description}</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default QueryGenerator;
