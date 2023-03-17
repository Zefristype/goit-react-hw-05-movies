import styled from 'styled-components';

export const Username = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
  color: #ff7b00;
`;

export const Text = styled.p``;

export const Reviews = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 30px;
  margin: 30px 0;
`;

export const Item = styled.li`
  padding: 20px;
  border-radius: 5px;
  box-shadow: rgba(247, 161, 3, 0.12) 0px 1px 3px, rgb(228, 138, 2) 0px 1px 2px;
`;

export const EmptyReviews = styled.p`
  font-size: 30px;
  text-align: center;
`;
