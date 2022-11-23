import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";

import { fetchData } from "../utils/api";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);

  const { searchTerm } = useParams();

  useEffect(() => {
    fetchData(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data.items);
    });
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "88vh" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "#fff" }}>
        Search result for
        <span style={{ color: "#007ea7" }}> {searchTerm}</span>
      </Typography>

      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
