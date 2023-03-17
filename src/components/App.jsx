import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

import { Layout } from './Layout/Layout';

const Home = lazy(() => import('pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieCast = lazy(() => import('pages/MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('pages/MovieReviews/MovieReviews'));
const NotFound = lazy(() => import('pages/notFound/NotFound'));

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
