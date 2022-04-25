import styled from 'styled-components/macro';
import { Field } from 'formik';

export const InputField = styled(Field)`
  outline: none;
  border: none;
  width: 90%;
  background: none;
`;

export const InputCheckBox = styled(Field)`
  border: 2px dotted #00f;
  display: block;
  background: #ff0000;
  width: 15px;
  height: 15px;
  margin-right: 5px;
`;
export const IconWrapper = styled.div``;
export const Item = styled.div`
  padding: 12px 15px;
  border-radius: 7px;
`;

export const FormGroup = styled.div`
  background-color: #e5ebf0;
  height: 40px;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
  border-radius: 7px;

  &:hover {
    background-color: #d2d6da;
  }
`;
