import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieLink = styled(Link)`
  font-size: 24px;
  color: black;
  text-decoration: none;
  transition: color 200ms ease-out;
  &:hover,
  &:focus {
    color: #ff7b00;
  }
`;
