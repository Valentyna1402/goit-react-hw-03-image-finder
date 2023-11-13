import styled from 'styled-components';

const Button = styled.button`
background-color: green;
border-radius: 3px;
border-style: none;
color: #fff;
height: 40px;
width: 40px;
display: block;
margin: 0 0 10px auto;
transition: color 100ms;
&:active,
&:focus,
&:hover {
  background-color: rgb(54, 167, 57);
`;

const Image = styled.img`
  max-width: 900px;
  max-height: 600px;
`;

export { Button, Image };
