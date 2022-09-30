import React from "react";
import { Box, Typography } from "@mui/material";

import "./ListMovies.css";
import CardMovie from "../components/CardMovies";

import jsonMovie from "../data/movie.json";

const ListMovies = () => {
  return (
    <Box className="boxy">
      <Typography className="boxy">Container List Movie (Data JSON)</Typography>
      {jsonMovie.results.slice(-3).map((movie) => {
        return <CardMovie key={movie.id} movie={movie} />;
      })}
    </Box>
  );
};

export default ListMovies;
