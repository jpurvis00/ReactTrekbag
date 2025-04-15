import Counter from "./Counter";
import Logo from "./Logo";
/*2 Implementing solution 2 */
/*2 We moved the useContext to a custom hook in hooks.js. This allows us to */
/*2 avoid using useContext in every file and use only one import instead of 2. */
/*2 import { useContext } from "react"; */
/*2 import { ItemsContext } from "../contexts/ItemsContextProvider"; */
/*2 Implementing solution 2 */
import { useItemsContext } from "../lib/hooks";
import { useItemsStore } from "../stores/itemsStore";

export default function Header() {
  /*2 Implementing solution 2 */
  /*2 const { items } = useContext(ItemsContext); */
  /*2 Created a customer hook in hooks.js to avoid using useContext in every file */
  /*2 const { items } = useItemsContext();
  /*2 Implementing solution 2 */

  /*3 Implementing solution Zustand 3 */
  const items = useItemsStore((state) => state.items);
  /*3 Implementing solution Zustand 3 */

  return (
    /*2 Implementing solution 2 */
    <header>
      <Logo />
      <Counter
        numberOfItemsPacked={items.filter((item) => item.packed).length}
        totalNumberOfItems={items.length}
      />
    </header>
    /*2 Implementing solution 2 */
  );
}

//1 export default function Header({ children }) {
//1   return <header>{children}</header>;
//1 }
