import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Info = styled.div`
  display: flex;
  
  border-radius: 3px;
  padding: 20px;
  box-shadow: rgba(247, 161, 3, 0.12) 0px 1px 3px, rgb(228, 138, 2) 0px 1px 2px;
`;

export const SubInfo = styled.div`
  display: flex;
  gap: 30px;
  margin: 30px 0 0 50px;
`;

export const Img = styled.img`
  width: 300px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  margin-left: 30px;
  max-width: 100%;
`;

export const Text = styled.p`
  margin-top: 10px;
  font-size: 25px;
`;

export const AdditionalLink = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  min-width: 100px;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
  background-color: #242424;
  border-radius: 7px;
  border: solid 1px black;
  transition: all 200ms ease-out;
  transform: scale(1);
  &:hover,
  &:focus {
    transform: scale(1.1);
    background-color: #ff7b00;
  }
`;

export const MovieName = styled.h1`
  font-size: 40px;
  color: #ff7b00;
`;

export const Title = styled.h2`
  font-size: 30px;
  color: #ff7b00;
`;
