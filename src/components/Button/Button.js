import { LoadMoreButton } from './Button.styled';

export const Button = ({ onClick: handleLoadMore }) => {
  return <LoadMoreButton onClick={handleLoadMore}>Load more</LoadMoreButton>;
};
