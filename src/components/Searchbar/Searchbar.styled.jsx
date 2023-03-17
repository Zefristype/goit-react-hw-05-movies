import styled from 'styled-components';

export const Label = styled.label`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  font-size: 26px;
`;
export const Input = styled.input`
  font-size: 24px;
  font-weight: 400;
`;

export const Form = styled.form`
  display: flex;
  margin: 22px 0;
`;

export const Button = styled.button`
  display: block;
  cursor: pointer;
  background-color: #fff;
  border: none;
  border-radius: 2px;

  background-color: #ff7b00;
  transition: all 250ms ease-out;
  svg {
    fill: #fff;
  }
  &:hover,
  &:focus {
    background-color: #3a3a3a;
    svg {
      fill: #ff7b00;
    }
  }
`;
