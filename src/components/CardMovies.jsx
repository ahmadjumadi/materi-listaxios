import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Rating,
  Typography,}
  from '@mui/material';

  const CardMovie = (props) => {
    const baseUrlMovies = "https://image.tmdb.org/t/p/w200"

    return (
      <Card className='boxy'>
        <Box>
          <Typography variant='h6'>Component Card Movie</Typography>
        </Box>
        <Box 
          className='boxy'
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center'
          }}
        >
          <CardMedia 
            component="img"
            image={`${baseUrlMovies}${props.movie.poster_path}`}
            alt={props.movie.title}
            style= {{ height: '10%', width: '10%' }}
          >
          </CardMedia>
          
          <CardContent 
              sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  width: 1,
              }}
            >
              <Typography variant='body1' component="div">{props.movie.title}</Typography>
              <Rating 
                value={props.movie.vote_average / 2}
                precision={0.1}
                readOnly
              />
              <Typography variant='body2'>
                Release Date: {props.movie.release_date}
              </Typography>
              <Typography variant='body2'>
                {props.movie.overview}
              </Typography>
            </CardContent>
        </Box>
      </Card>
    );
  };

  export default CardMovie;