import { useState, useEffect } from 'react';
import { getTrendingMovies } from 'components/services/getMovies';
import { MovieList } from 'components/MoviesList/MoviesList';
import { Title, HomeWrapper } from './Home.styled';
const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovies() {
      try {
        const data = await getTrendingMovies();
        setMovies(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, []);
  return (
    <HomeWrapper>
      <Title>Trending today:</Title>
      <MovieList movies={movies} />
    </HomeWrapper>
  );
};

export default Home;
