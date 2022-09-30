import axios from 'axios';
import React, { useEffect, useState} from 'react';
import { Box, Typography } from '@mui/material';

import "./ListMovies.css";
import CardMovie from '../components/CardMovies';
import tmdb from '../apis/tmdb';

const ListMoviesReal = () => {
  const [movies, setMovies] = useState([]);

  useEffect(
    () => { 
      const fetchDataMovies = async () => {
        try {
          // const responseDariTMDB = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=49c27d43354e3e8e12df0edddbc0db24");
          const responseDariTMDB = await tmdb.get("/movie/popular");
          setMovies(responseDariTMDB.data.results);
        } catch(err) {
          console.log(err);
        }
      };
      
    fetchDataMovies();
   } , 
   []
);

  return (
    <Box className='boxy'>
      <Typography variant='h5'>Container movie data diambil dari TMDBD</Typography>
      {movies.map((movie) => {
        return <CardMovie key={movie.id} movie={movie} />
        })
      }
    </Box>
  );
}

export default ListMoviesReal;
