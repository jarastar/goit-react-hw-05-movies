import { useEffect, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchBar from 'components/SearchBar/SearchBar';
import { fetchMovies } from 'services/api';

const Movies = () => {
const location = useLocation();
const [search, setSearch] = useState('');
const [movies, setMovies] = useState([]);
const [error, setError] = useState();
const [searchParams, setSearchParams] = useSearchParams();

useEffect(() => {
  const query = searchParams.get('query');
  if (query) {
    setSearch(query);
    fetchMovies(query)
    .then(({ results }) => setMovies(results))
    .catch(error => setError(error));
}
}, [searchParams, location]);

  const onMovieSearch = search => {
    setSearch(search);
    setMovies([]);
    setSearchParams({ query: search });
};

  return (
    <main>
       <SearchBar onSubmit={onMovieSearch} initialValue={search} />
    {error && <p>{error}</p>}
    {search && movies.length === 0 && (
      <p>
    We did not find any movie with such name. Please, try another keyword!
    </p>
    )}
    {search && movies.length > 0 && (
    <MoviesList movies={movies} search={search} />
    )}
    </main>
);
};

export default Movies;