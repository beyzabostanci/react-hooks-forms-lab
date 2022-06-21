import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleCat(e){
    setCategory(e.target.value)
  }

  function handleNam(e){
    setName(e.target.value)
  }

  function handleSub(e){
    e.preventDefault();
    onItemFormSubmit({
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: name,
      category: category,
    });
  }
  return (
    <form className="NewItem" onSubmit={handleSub}>
      <label>
        Name:
        <input type="text" name="name" value={name} onChange={handleNam} />
      </label>

      <label>
        Category:
        <select name="category" value={category} onChange={handleCat}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
