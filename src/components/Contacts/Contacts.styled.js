import { styled } from 'styled-components';

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Li = styled.li`
  list-style: none;
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  min-width: 100px;
  height: 20px;
  border-radius: 8px;
  background-color: #3f51b51a;
  cursor: pointer;
`;

export const P = styled.p`
  min-width: 200px;
`;
