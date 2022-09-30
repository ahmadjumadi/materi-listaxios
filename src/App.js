import theme from "./theme/theme";
import { Box, ThemeProvider } from "@mui/material";
import { Button, Typography  } from "@mui/material";

import ListMovies from "./containers/ListMovies";
import ListMoviesReal from "./containers/ListMoviesReal";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <Box p={2}>
            <Typography  variant="h5">React List & Axios</Typography>
          </Box>
          <Box 
           sx={{ 
            p: 2,
            display: "flex",
            gap: 2,
            }}>
              <Button variant="contained" color="primary">Button Warna Hijau</Button>
              <Button variant="contained" color="secondary">Button Warna Biru</Button>
            </Box>
        </header>
        <section style={{  paddingLeft: 16, paddingRight: 16 }}>
            <ListMovies />
        </section>
        
        <section style={{  paddingLeft: 16, paddingRight: 16 }}>
            <ListMoviesReal />
        </section>
      </div>
    </ThemeProvider>
  );
}

export default App;
