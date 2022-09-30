import axios from "axios";

const tmdbInstance = axios.create({
  baseURL : "https://api.themoviedb.org/3",
  params : {
    api_key : "49c27d43354e3e8e12df0edddbc0db24",
  },
});

export default tmdbInstance;