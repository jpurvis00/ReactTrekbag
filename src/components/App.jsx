import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";
//2 import Logo from "./Logo";
//2 import Counter from "./Counter";
//3 no long needed import ItemsContextProvider from "../contexts/ItemsContextProvider";
//2 import { useEffect, useState } from "react";
//2 import { INITIAL_ITEMS } from "../lib/constants";

//We are introducing the concept of using the browsers local storage to
//store the user's items. This is so that if the page is refreshed, all the
//items they have added remain. The first thing we do is to check the local
//storage using the useState for the items var. We specify this with the
//() => {} function so that it only runs the first time the page is loaded.
//We check the local storage and return it's values, if it's empty, we load
//our initial array of items as a starting point.
//The localStorage is updated by the useEffect hook down below.
function App() {
  //2 const [items, setItems] = useState(() => {
  //2   return JSON.parse(localStorage.getItem("items")) || INITIAL_ITEMS;
  //2 });

  //2 const handleAddItem = (newItemText) => {
  //2   const newItem = {
  //2     id: new Date().getTime(),
  //2     name: newItemText,
  //2     packed: false,
  //2   };
  //2   const newItems = [...items, newItem];
  //2   setItems(newItems);
  //2 };

  //2 const handleRemoveItem = (itemId) => {
  //2   const newItems = items.filter((item) => item.id !== itemId);
  //2   setItems(newItems);
  //2 };

  //2 const handleToggleItem = (itemId) => {
  //2   const newItems = items.map((item) => {
  //2     if (item.id === itemId) {
  //2       return { ...item, packed: !item.packed };
  //2     }
  //2     return item;
  //2   });
  //2   setItems(newItems);
  //2 };

  //2 const handleRemoveAllItems = () => {
  //2   setItems([]);
  //2 };

  //2 const handleResetToInitial = () => {
  //2   setItems(INITIAL_ITEMS);
  //2 };

  //2 const handleMarkAllAsIncomplete = () => {
  //2   const newItems = items.map((item) => {
  //2     return { ...item, packed: false };
  //2   });

  //2   setItems(newItems);
  //2 };

  //2 const handleMarkAllAsComplete = () => {
  //2   const newItems = items.map((item) => {
  //2     return { ...item, packed: true };
  //2   });

  //2   setItems(newItems);
  //2 };

  //2 //We use the useEffect hook here bc we are going to be interacting with
  //2 //something(localStorage) outside of react. This is triggered every
  //2 //time the items object is changed. We then write the items object to
  //2 //the browsers localStorage.
  //2 useEffect(() => {
  //2   localStorage.setItem("items", JSON.stringify(items));
  //2 }, [items]);

  return (
    <>
      <BackgroundHeading />

      <main>
        {/*We have an issue with prop drilling below. This is where we pass props
           down through multiple children components until we get to the child
           component that needs the props. This is just extra uneeded work. We can
           handle this in 2 different ways. 
           1. Passing the values using the children prop. This is more for smaller 
              apps as it tends to bloat the top most component. We will show this
              using the Header component. The Logo and Counter components have 
              been moved up to here instead of residing in the Header component.
              They are now passed down as children. This means in my Header comp.
              all I have to receive is the {children} prop.
           2. React provides the Context API to handle this as well. Generally we
              create a context folder and store all our contexts there. This means
              that everything that has to do with the items context is moved into
              that file. Everything commented out with the #2 is done for changing
              to use this concept.
        */}
        {/*1 and 2 <Header>
        1 and 2   <Logo />
        1 and 2   <Counter
        1 and 2     numberOfItemsPacked={items.filter((item) => item.packed).length}
        1 and 2     totalNumberOfItems={items.length}
        1 and 2   />
        1 and 2 </Header>
        2 <ItemList
        2   items={items}
        2   handleRemoveItem={handleRemoveItem}
        2   handleToggleItem={handleToggleItem}
        2 />
        2 <Sidebar
        2   handleAddItem={handleAddItem}
        2   handleRemoveAllItems={handleRemoveAllItems}
        2   handleResetToInitial={handleResetToInitial}
        2   handleMarkAllAsComplete={handleMarkAllAsComplete}
        2   handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
        2 />*/}

        {/*2 Implementing solution 2 */}
        {/*2 We wrap the following components in the ItemsContextProvider. This allows us to
           use the context API to pass props down to all the children components
           without having to pass them down through each component. */}

        {/*3 Implementing solution 3 */}
        {/*3 commenting out <ItemsContextProvider> */}
        {/*3 Implementing solution 3 */}
        <Header />
        <ItemList />
        <Sidebar />
        {/*3 Implementing solution 3 */}
        {/*3 commenting out </ItemsContextProvider> */}
        {/*3 Implementing solution 3 */}
        {/*2 Implementing solution 2 */}
      </main>

      <Footer />
    </>
  );
}

export default App;
