import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [search, setSearch] = useState("")

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleAddItem(newItem) {
    setItems([...items, newItem])
  }

  const filteredItems = items.filter((item) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList 
      items={filteredItems} 
      search={search} 
      onSearchChange={handleSearchChange} 
      onItemFormSubmit={handleAddItem}
      />
    </div>
  );
}

export default App;