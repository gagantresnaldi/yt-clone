import React, { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "./index";

import { fetchData } from "../utils/api";

const Feed = () => {
  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Pewdiepie");

  useEffect(() => {
    fetchData(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data.items);
    });
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCat={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "white" }}
        >
          Copyright 2022 ITube Inc
        </Typography>
      </Box>

      <Box p={2} sx={{ overflowY: "auto", flex: 2, height: "88vh" }}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#fff" }}
        >
          {selectedCategory}
          <span style={{ color: "#007ea7" }}> Videos</span>
        </Typography>

        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
