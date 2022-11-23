import React from "react";
import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { SearchBar } from "./index.js";
import { logo } from "../utils/constants";

const Navbar = () => (
  <Stack
    direction={{ xs: "column", sm: "row" }}
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#00171F",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        color="white"
        variant="h5"
        fontWeight="bold"
        marginLeft="10px"
      >
        I Tube
      </Typography>
    </Link>

    <SearchBar />
  </Stack>
);
export default Navbar;
