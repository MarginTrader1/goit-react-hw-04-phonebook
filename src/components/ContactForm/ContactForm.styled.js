import { styled } from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)`
  min-width: 300px;
  margin-top: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  > label {
    display: flex;
    gap: 10px;
  }
`;

export const StyledField = styled(Field)`
  padding: 10px;
  margin-left: 15px;
`;

export const StyledError = styled(ErrorMessage)`
  color: red;
`;

export const Button = styled.button`
  margin-left: 30px;

  width: 200px;
  height: 30px;
  border-radius: 8px;
  background-color: #3f51b51a;
  cursor: pointer;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  width: 50px;
 

`;
