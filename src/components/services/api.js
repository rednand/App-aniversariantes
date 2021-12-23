import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

// export const apiImagem = axios.create({
//     baseURL: 'https://api.tvmaze.com/search/shows?q='
// });

export default api;
