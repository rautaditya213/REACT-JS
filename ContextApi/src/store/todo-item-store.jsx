import { createContext } from "react"


export const TodoItemsContext = createContext(
   { todoIitems: [],
    addNewItem: ()=>{},
    deleteItem:()=>{},
   }
);