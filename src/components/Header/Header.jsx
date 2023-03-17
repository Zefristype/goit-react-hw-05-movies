import { Nav, Link, NavHeader, Wrapper } from './Header.styled';
import { Container } from 'components/Layout/Layout.styled';
import { GiFilmProjector } from 'react-icons/gi';

export const Header = () => {
  return (
    <NavHeader>
      <Container>
        <Wrapper>
          <GiFilmProjector fill="#fff" size={60} />
          <Nav>
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
          </Nav>
        </Wrapper>
      </Container>
    </NavHeader>
  );
};
