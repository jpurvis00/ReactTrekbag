import EmptyView from "./EmptyView";
import Select from "react-select";
/*2 Implementing solution 2 */
import { useContext, useState, useMemo } from "react";
/*2 import { ItemsContext } from "../contexts/ItemsContextProvider"; */
/*2 import { useItemsContext } from "../lib/hooks"; */
import { useItemsStore } from "../stores/itemsStore";
/*2 Implementing solution 2 */

//Here we are implementing a sort for our item list. The sort is controlled by a
//select box. This has been installed and imported from npm react-select. The
//select box takes props, 1 being the options. We created an array with those
//options/values and pass that to the Select. We also want to monitor the state of
//the chosen select value so that it re-renders when a new option has been chosen.
//We then sort the list of items based on the value of the sortBy var and when we
//display the list, we must map over that sorted list.
const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  //2 {
  //2 items,
  //2 handleRemoveItem,
  //2 handleToggleItem,
  //2 }

  /*3 Implementing solution Zustand 3 */
  const items = useItemsStore((state) => state.items);
  const removeItem = useItemsStore((state) => state.removeItem);
  const toggleItem = useItemsStore((state) => state.toggleItem);
  /*3 Implementing solution Zustand 3 */
  const [sortBy, setSortBy] = useState("default");

  /*2 Implementing solution 2 */
  //2 We can access the items object and the functions we want to use from the
  //2 context API. We do this by using the useContext hook and passing in the
  //2 context we created in the ItemsContextProvider. In this component we
  //2 don't all the functions we created in the context. We only need the
  //2 remove and toggle functions. We can get this by destructuring the
  //2 itemsContext object.
  //commenting out to use our custom useItemsContext hook
  //const { items, handleRemoveItem, handleToggleItem } =
  //  useContext(ItemsContext);
  //2 const { items, handleRemoveItem, handleToggleItem } = useItemsContext();
  /*2 Implementing solution 2 */

  //We introduced useMemo here for the sortedItems list. Bc sorting can be
  //very taxing on performance if we have a large array, we don't want this
  //to run everytime this component is re-rendered which we can't always control.
  //Using the useMemo allows this to only be run on first load and then any time
  //the items or sortBy objects are updated/changed.
  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }

        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }

        return;
      }),
    [items, sortBy],
  );

  return (
    <ul className="item-list">
      {items.length === 0 ? <EmptyView /> : null}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            /*2 onDeleteItem={handleRemoveItem} */
            /*2 onToggleItem={handleToggleItem} */
            onDeleteItem={removeItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          checked={item.packed}
          type="checkbox"
          //We call the method that onClick needs with the following notation:
          //{() => method(item.id)}. We do it this way so that the method is only
          //executed once via onClick. If we were to call it like this:
          //{method(item.id)}, it would call the function on every render.
          onClick={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>
      {/*We call the method that onClick needs with the following notation: 
         {() => method(item.id)}. We do it this way so that the method is only
         executed once via onClick. If we were to call it like this: 
         {method(item.id)}, it would call the function on every render. */}
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
