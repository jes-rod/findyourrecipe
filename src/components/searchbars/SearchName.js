

function SearchName(props) {
  return (
    <div>
      <form  className="search-form" onSubmit={props.searchByName}>
        <label htmlFor="name" className="label">Search by name</label>
        <input type="text" className="input w-input" maxLength="256" name="name" data-name="name" placeholder="Pizza" id="name" onChange={(e) => props.setName(e.currentTarget.value)}/>
          <input type="submit" value="Search" className="submit-button w-button" />
      </form>
      <div className="checkboxes-form">
        <div className="form-block w-form">
          <form  className="form" >
            <label className="w-checkbox vegan-field">
              <input type="checkbox" id="Vegan" name="Vegan" data-name="Vegan" className="w-checkbox-input vegan-checkbox" onChange={props.changeVegan}/>
                <span className="checkbox-label w-form-label" htmlFor="Vegan">Vegan</span>                 </label>
            <label className="w-checkbox vegetarian-field">
              <input type="checkbox" id="checkbox-2" name="checkbox-2" data-name="Checkbox 2" className="w-checkbox-input vegetarian-checkbox" onChange={props.changeVegetarian}/>
                <span className="vegetarian-label w-form-label" htmlFor="checkbox-2">Vegetarian</span>
            </label>
            <label className="w-checkbox glutenfree-field">
              <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" className="w-checkbox-input recip" onChange={props.changeGluten}/>
                <span className="checkbox-label-2 w-form-label" htmlFor="checkbox">Gluten Free</span>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SearchName;
