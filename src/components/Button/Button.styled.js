import styled from "styled-components";

const LoadMoreButton = styled.button`
  background-color: green;
  border-radius: 3px;
  border-style: none;
  box-sizing: border-box;
  color: #fff;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  height: 40px;
  line-height: 20px;
  display: block;
  margin: 0 auto;
  padding: 10px 16px;
  text-align: center;
  transition: color 100ms;
  &:active,
  &:focus,
  &:hover {
    background-color: rgb(54, 167, 57);
  }
`;

export {LoadMoreButton}