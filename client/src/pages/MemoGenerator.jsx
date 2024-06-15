

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
} from "@mui/material";

const MemoGenerator = () => {
  const [query, setQuery] = useState('');
  const [medicineResult, setMedicineResult] = useState(null);
  const [error, setError] = useState(null);
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/api/medicines/search?q=${query}`);
      if (response.data.message === 'Medicine not found') {
        setError('Medicine not found');
        setMedicineResult(null);
        return;
      }
      setMedicineResult(response.data);
      setError(null);
    } catch (error) {
      setError('Internal Server Error');
      setMedicineResult(null);
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
      <h1>Search Medicine Info Here 👇</h1>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {medicineResult && (
        <div className="result-container"> 
        <div className="result">
          <h2>{medicineResult.name}</h2>
          <p>{medicineResult.description}</p>
          <p>{medicineResult.usage}</p>
          <p>{medicineResult.dosage}</p>
        </div>
        </div>
      )}
    </div>
  );
};

export default MemoGenerator;
