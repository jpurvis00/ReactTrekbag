//This is replacing the Context API code. All code for this change is going to be
//inside of /*3 tags.

//We will be using the Zustand state management library to manage the state of our
//items. This will allow us to avoid prop drilling and make our code more
//maintainable. Zustand is a small, fast, and scalable bearbones state-management
//library. It is a great alternative to Redux and is much easier to use.

//This solves the issues of React Context API not having selectors for the state
//of our object which means if one state changes in any of our object, all components
//that use the context re-render. Zustand allows us to select which object from
//our store causes the component to re-render. Ex. const addItem = useItemsStore((state) => state.addItem);
//This means that the only time this component re-renders is when the addItem state
//changes.
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { INITIAL_ITEMS } from "../lib/constants";

//We wrap our whole create function in a persist function and give it a name at the bottom.
//This saves our item store in the browser local storage.
export const useItemsStore = create(
  persist(
    (set) => ({
      items: INITIAL_ITEMS,
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: INITIAL_ITEMS }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: true };
          });
          return { items: newItems };
        });
      },
      markAllAsIncomplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: false };
          });
          return { items: newItems };
        });
      },
      removeItem: (itemId) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id !== itemId);
          return { items: newItems };
        });
      },
      toggleItem: (itemId) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === itemId) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newItems };
        });
      },
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };

        set((state) => ({ items: [...state.items, newItem] }));
      },
    }),
    {
      name: "items",
    },
  ),
);
