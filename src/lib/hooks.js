import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

// This is a custom hook that allows us to access the ItemsContext
// without having to use the useContext hook every time in each file.
export function useItemsContext() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsContextProvider",
    );
  }

  return context;
}
