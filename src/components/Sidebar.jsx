import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";
import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";

export default function Sidebar() {
  //2 {
  //2 handleAddItem,
  //2 handleRemoveAllItems,
  //2 handleResetToInitial,
  //2 handleMarkAllAsComplete,
  //2 handleMarkAllAsIncomplete,
  //2 }

  /*2 Implementing solution 2 */
  /*2 const { handleAddItem } = useItemsContext(); //useContext(ItemsContext);
  /*2 Implementing solution 2 */

  /*3 Implementing solution Zustand 3 */
  const addItem = useItemsStore((state) => state.addItem);
  /*3 Implementing solution Zustand 3 */

  console.log("sidebar rendering...");

  return (
    <div className="sidebar">
      {/*2 <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        handleRemoveAllItems={handleRemoveAllItems}
        handleResetToInitial={handleResetToInitial}
        handleMarkAllAsComplete={handleMarkAllAsComplete}
        handleMarkAllAsIncomplete={handleMarkAllAsIncomplete}
      /> */}

      {/*2 Implementing solution 2 */}
      {/*2 <AddItemForm onAddItem={handleAddItem} /> */}
      {/*3 Implementing solution Zustand 3 */}
      <AddItemForm onAddItem={addItem} />
      {/*3 Implementing solution Zustand 3 */}

      <ButtonGroup />
      {/*2 Implementing solution 2 */}
    </div>
  );
}
