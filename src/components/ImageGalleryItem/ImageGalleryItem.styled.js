import styled from 'styled-components';

const Item = styled.li`
  width: calc((100% - 10px) / 3);
  height: 235px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { Item, Image };
