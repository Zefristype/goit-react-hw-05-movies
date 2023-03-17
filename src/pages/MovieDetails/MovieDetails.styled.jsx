import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const LinkBack = styled(Link)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
  padding: 5px 0;
  max-width: 100px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #242424;
  border: solid 1px black;
  transition: background-color 250ms ease-out;
  &:hover,
  &:focus {
    background-color: #ff7b00;
  }
`;
