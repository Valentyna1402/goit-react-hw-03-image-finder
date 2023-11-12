export const SearchBar = ({onSubmit: handleSubmit}) => {
return (
    <header>
    <form onSubmit={evt => {
evt.preventDefault();
handleSubmit(evt.target[1].value.toLowerCase())
}}>
      <button type="submit">
        <span>Search</span>
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