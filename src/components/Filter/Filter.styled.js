import { styled } from 'styled-components';

export const Div = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;

  display: flex;
  flex-direction: column;
  gap: 15px;
  > label > input {
    padding: 10px;
    margin-left: 15px;
  }
`;
