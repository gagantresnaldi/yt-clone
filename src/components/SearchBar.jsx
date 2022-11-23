import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, Box } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={searchHandler}
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        paddingLeft: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input
        type="text"
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <IconButton type="submit" sx={{ p: "10px", color: "#00A8E8" }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
