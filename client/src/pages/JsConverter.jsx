import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
} from "@mui/material";
import "./style.css"

const JsConverter = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [error, setError] = useState(null);
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/programs/search?q=${query}`);
      if (response.data.message === 'Program not found') {
        setError('Program not found');
        setResults(null);
        return;
      }
      setResults(response.data);
      setError(null);
    } catch (error) {
      setError('Internal Server Error');
      setResults(null);
    }
  };

  const similarity = (s1, s2) => {
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    const longerLength = longer.length;
    if (longerLength === 0) return 1.0;
    return (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength);
  };

  const editDistance = (s1, s2) => {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    const costs = [];
    for (let i = 0; i <= s1.length; i++) {
      let lastValue = i;
      for (let j = 0; j <= s2.length; j++) {
        if (i === 0) {
          costs[j] = j;
        } else {
          if (j > 0) {
            let newValue = costs[j - 1];
            if (s1.charAt(i - 1) !== s2.charAt(j - 1)) {
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            }
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  };

  const findBestMatchProgram = (query, programs) => {
    let bestMatchProgram = null;
    let bestMatchScore = -1;
    for (const program of programs) {
      const similarityScore = similarity(program.name.toLowerCase(), query.toLowerCase());
      if (similarityScore > bestMatchScore) {
        bestMatchScore = similarityScore;
        bestMatchProgram = program;
      }
    }
    return bestMatchProgram;
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
      <h1>Search Program Here 👇</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {results && (
        <div className="result-container"> 
          <div className="result">
            <h2>{results.name}</h2>
            <p>{results.description}</p>
          </div>
        </div>
      )}
    </div>
  );
  
}
export default JsConverter;
