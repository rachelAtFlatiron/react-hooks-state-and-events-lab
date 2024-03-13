import React, { useState } from "react";
import Item from "./Item";

/*
1. create state selectedCategory 
2. when value of <select> is changed, update selectedCategory
3. use selectedCategory to .filter through items
*/

/*
Common issues / things to remember

- update JSX to reflect filteredItems array
- in filteredItems array make sure to include case for "All" items
*/
function ShoppingList({ items }) {

  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleChange = (newCategory) => {
    setSelectedCategory(newCategory)
  }

  const filteredItems = items.filter(item => {
    //filter needs callback to return true or false
    return item.category === selectedCategory || selectedCategory === "All"
  })

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={(e) => handleChange(e.target.value)} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
