import { useState, useEffect } from "react";
import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Box, Grid, WorldMap } from "grommet";
import RandomCountry from "./Inputt.jsx";

const App = () => {
  return (
    <Grid>
      <Box>
        <WorldMap
          color="brand"
          continents={[
            {
              name: "Africa",
              color: "graph-1",
              onClick: (name) => {},
            },
            {
              name: "Europe",
              color: "graph-2",
              onClick: (name) => {},
            },
            {
              name: "Asia",
              color: "graph-3",
              onClick: (name) => {},
            },
            {
              name: "Australia",
              color: "graph-4",
              onClick: (name) => {},
            },
            {
              name: "North America",
              color: "white",
              onClick: (name) => {},
            },
            {
              name: "South America",
              color: "orange",
              onClick: (name) => {},
            },
          ]}
        />
      </Box>
      <RandomCountry />
    </Grid>
  );
};

export default App;
