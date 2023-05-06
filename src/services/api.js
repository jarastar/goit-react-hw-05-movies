import axios from 'axios';

const API_KEY = '86aacb762c98a04fb38612162e225c44';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: API_KEY,
  },
});

export const fetchTrendingMovies = async page => {
  const response = await instance.get(`/trending/movie/day`, {
    params: {
      page,
    },
  });

  return response.data;
};

export const fetchMovies = async query => {
  const response = await instance.get(`/search/movie`, {
    params: {
      query,
    },
  });

  return response.data;
};

export const getMovieById = async id => {
  const response = await instance.get(`/movie/${id}`, {
    params: {
      movie_id: id,
    },
  });

  return response.data;
};

export const getMovieCredits = async id => {
  const response = await instance.get(`/movie/${id}/credits`, {
    params: {
      movie_id: id,
    },
  });

  return response.data;
};

export const getMovieReviews = async id => {
  const response = await instance.get(`/movie/${id}/reviews`, {
    params: {
      movie_id: id,
    },
  });

  return response.data;
};