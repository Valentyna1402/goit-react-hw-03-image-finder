import {BsSearch} from 'react-icons/bs'

export const SearchBar = ({onSubmit: handleSubmit}) => {
return (
    <header>
    <form onSubmit={evt => {
evt.preventDefault();
handleSubmit(evt.target[1].value.toLowerCase());
evt.target[1].value = '';
}}>
      <button type="submit">
      <BsSearch />
      </button>
  
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
      />
    </form>
  </header>
)
}