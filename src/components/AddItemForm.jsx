import { useState, useRef } from "react";
import Button from "./Button.jsx";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  //This allows us to reference our input field. This is the
  //way it's done in react.
  const inputRef = useRef();

  //By default, a form submit action triggers the page to submit
  //the form causing the page to reload. We want to handle what
  //happens when the submit action happens so we add the event(e)
  //and then prevent the defualt action of the submit.
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemText) {
      alert("Item can't be empty!");
      inputRef.current.focus();
      return;
    }

    onAddItem(itemText);
    setItemText("");
    inputRef.current.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Item</h2>
      <input
        //This allows us to reference our input field in a method.
        //This is the way it's done in react.
        ref={inputRef}
        value={itemText}
        onChange={(e) => {
          setItemText(e.target.value);
        }}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}
