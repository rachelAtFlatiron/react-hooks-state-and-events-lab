import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

/*
1. create darkMode state
2. create event handler to update state (handleClick)
3. add event handler to event listener (onClick)
4. use state to inform something (the class name to use - you can put this directly in JSX with a ternary, or use an exterior constant that you then put in JSX)
*/
function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  
  //button click -> setDarkMode -> re-render class name (React handles this)
  const [darkMode, setDarkMode] = useState(false)

  // this will be used for the Dark Mode Toggle feature
  // this gets reinitialized on update state because state causes a re-render thus running all the logic again
  const appClass = darkMode ? "App dark" : "App light"

  const handleClick = () => {
    let newDarkMode = !darkMode //need previous version of dark mode to inform our updated version
    setDarkMode(newDarkMode)
    //setDarkMode(prev => !prev)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
