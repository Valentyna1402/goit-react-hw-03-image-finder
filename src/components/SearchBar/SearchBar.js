import { BsSearch } from 'react-icons/bs';

import { Header, Form, Button, Field } from './SearchBar.styled';

export const SearchBar = ({ onSubmit: handleSubmit }) => {
  return (
    <Header>
      <Form
        onSubmit={evt => {
          evt.preventDefault();
          const query = evt.target.input.value;
          handleSubmit(query.toLowerCase());
          evt.target.reset();
        }}
      >
        <Button type="submit">
          <BsSearch />
        </Button>

        <Field
          type="text"
          name='input'
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
};
