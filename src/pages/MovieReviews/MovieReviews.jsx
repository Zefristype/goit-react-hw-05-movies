import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'components/services/getMovies';
import { useEffect, useState } from 'react';
import {
  Username,
  Text,
  Item,
  Reviews,
  EmptyReviews,
} from './MovieReviews.styled';

const MovieReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const data = await getMovieReviews(id);
        setReviews(data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getCast();
  }, [id]);

  return (
    <>
      {reviews.length !== 0 ? (
        <Reviews>
          {reviews.map(({ author, content }) => {
            return (
              <Item key={author}>
                <Username>{author}</Username>
                <Text>{content}</Text>
              </Item>
            );
          })}
        </Reviews>
      ) : (
        <EmptyReviews>We don't have any reviews for this movie.</EmptyReviews>
      )}
    </>
  );
};

export default MovieReviews;
