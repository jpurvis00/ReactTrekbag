import { createContext, useState, useEffect } from "react";
import { INITIAL_ITEMS } from "../lib/constants";

//********************************************************************//
//There is one big issue with using the context api. The context api
//has no selectors. This means that if anything in the context changes,
//all the components that use that context will re-render. This can be
//a problem if we have a large app with many components. For example,
//if something in the list updates, our sidebar will re-render since its
//using the handleAddItem method from the context. This is not ideal.
//Our sidebar does not need to re-render if the list updates.
//There are better ways to manage state in a react app. One of those is
//Zustand. This is a state management library that allows us to
//create a store and manage state in a more efficient way. It is
//similar to Redux but much simpler and easier to use.
//The other is Redux. This is a more complex state management library.
//********************************************************************//

//This file has been created to manage the state of the items. We are also
//creating a context for the items so that we can use it in other components.
//We return the context provider and pass the items and the functions we want
//other components to have access to. This allows us to avoid prop drilling.
export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    return JSON.parse(localStorage.getItem("items")) || INITIAL_ITEMS;
  });

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const handleRemoveItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
  };

  const handleToggleItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleResetToInitial = () => {
    setItems(INITIAL_ITEMS);
  };

  const handleMarkAllAsIncomplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });

    setItems(newItems);
  };

  const handleMarkAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });

    setItems(newItems);
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleRemoveItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarkAllAsComplete,
        handleMarkAllAsIncomplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
