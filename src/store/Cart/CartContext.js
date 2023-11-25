import { createContext } from "react";

export const CartContext = createContext({
  open: false,
  onOpen: () => {},
  onClose: () => {},
  items: [],
  addItem: (item) => {},
  removeItem: (item) => {},
  totalAmount: 0,
});
