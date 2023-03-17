import styled from 'styled-components';

export const ProfileImg = styled.img`
  width: 130px;
`;

export const Cast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 30px 0;
`;
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: calc((100% - 100px) / 5);
  padding: 10px;
  box-shadow: rgba(247, 161, 3, 0.12) 0px 1px 3px, rgb(228, 138, 2) 0px 1px 2px;
`;
export const Name = styled.p`
  margin-top: 10px;
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  color: #ff7b00;
`;
export const Character = styled.p`
  margin-top: 10px;
  text-align: center;
  font-weight: 500;
`;

export const CastEmpty = styled.p`
  font-size: 30px;
  text-align: center;
`;
