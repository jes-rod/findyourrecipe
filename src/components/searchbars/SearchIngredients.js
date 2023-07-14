

function SearchIngredients(props) {
  return (
    <div className="search-form w-form">
      <form  className="search-form" onSubmit={props.searchByIngredients}>
        <label htmlFor="ingredients" className="label">Search by ingredients</label>
        <input type="text" className="input w-input" maxLength="256" name="ingredients" data-name="ingredients" placeholder="meat tomato lettuce" id="ingredients" onChange={(e) => props.setIngredients(e.currentTarget.value)}/>
        <input type="submit" value="Search" data-wait="Please wait..." className="submit-button w-button" />
      </form>
    </div>
  );
}

export default SearchIngredients;
