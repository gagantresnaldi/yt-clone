import React from "react";
import { Stack } from "@mui/material";

import { categories } from "../utils/constants";

const Sidebar = ({ selectedCat, setSelectedCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((item) => (
        <button
          className="category-btn"
          style={{
            backgroundColor: item.name === selectedCat && "#007ea7",
            color: "white",
          }}
          key={item.name}
          onClick={() => setSelectedCategory(item.name)}
        >
          <span
            style={{
              color: item.name === selectedCat ? "white" : "#007ea7",
              marginRight: "15px",
            }}
          >
            {item.icon}
          </span>

          <span style={{ opacity: item.name === selectedCat ? "1" : "0.8" }}>
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
