import React from 'react'
import styled from 'styled-components';
import { Field, ErrorMessage } from "formik";
import colors from 'helpers/colors';

const InputField = ({ label, type, name }) => {
  return (
    <label>
      <div>{label}</div>
      <FormField type={type} name={name} />
      <ErrorMessage name={name} component="div" style={{ color: 'red' }} />
    </label>
  )
};

const FormField = styled(Field)`
  height: 25px;
  border-radius: 5px;
  margin-top: 5px;
  border: 0;
  padding-left: 5px;
  border: solid 1px ${colors.black};
  background: ${colors.backgroundColor};
  transition: 0.4s;
  
  :focus{
    border: solid 1px ${colors.primaryGreen};
    background: #fff;
  }
`;
export default InputField;
