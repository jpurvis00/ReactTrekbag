import Button from "./Button.jsx";
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";
import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore.js";

export default function ButtonGroup() {
  //2 {
  //2 handleRemoveAllItems,
  //2 handleResetToInitial,
  //2 handleMarkAllAsComplete,
  //2 handleMarkAllAsIncomplete,
  //2 }

  /*2 Implementing solution 2 */
  /*2 const {
  /*2   handleRemoveAllItems,
  /*2   handleResetToInitial,
  /*2   handleMarkAllAsComplete,
  /*2   handleMarkAllAsIncomplete,
  /*2 } = useItemsContext();
  /*2 Implementing solution 2 */

  /*3 Implementing solution 3 */
  /*3 Implemting state management with Zustand */
  const markAllAsComplete = useItemsStore((state) => state.markAllAsComplete);
  const markAllAsIncomplete = useItemsStore(
    (state) => state.markAllAsIncomplete,
  );
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  /*3 Implementing solution 3 */

  // The following array must be inside the default function since we are using it
  // to reference the functions passed in as props. If we put it outside the function
  // it would not have access to the props and would throw an error. Only down side
  // is that it will be recreated every time the component is rendered.
  const secondaryButtons = [
    {
      text: "Mark all as complete",
      onClick: markAllAsComplete,
    },
    {
      text: "Mark all as incomplete",
      onClick: markAllAsIncomplete,
    },
    {
      text: "Reset to initial",
      onClick: resetToInitial,
    },
    {
      text: "Remove all items",
      onClick: removeAllItems,
    },
  ];

  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          type="secondary"
          key={button.text + button.onClick.toString()}
          onClick={button.onClick}
        >
          {button.text}
        </Button>
      ))}
    </section>
  );
}
