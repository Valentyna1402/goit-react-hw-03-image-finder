import { BsSearch } from 'react-icons/bs';

import { Header, Form, Button, Field } from './SearchBar.styled';

export const SearchBar = ({ onSubmit: handleSubmit }) => {
  return (
    <Header>
      <Form
        onSubmit={evt => {
          evt.preventDefault();
          handleSubmit(evt.target[1].value.toLowerCase());
          evt.target[1].value = '';
        }}
      >
        <Button type="submit">
          <BsSearch />
        </Button>

        <Field
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
