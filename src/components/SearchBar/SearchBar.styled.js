import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  padding: 20px;
  background-color: green;
  position: fixed;
  top: 0;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  margin-right: 0;
`;

const Field = styled.input`
  min-width: 560px;
  border: none;
  outline: none;
  padding: 10px;
`;

export { Header, Form, Button, Field };
