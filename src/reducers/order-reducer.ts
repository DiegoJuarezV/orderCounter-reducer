import { menuItems } from "../data/db";
import { MenuItem, OrderItem } from "../types";

export type CartAction = 
  { type: "ADD_CART", payload: { menu: MenuItem } } |
  { type: "REMOVE_FROMCART", payload: { id: MenuItem['id'] }} |
  { type: "SET_TIP", payload: { tip: number } } |
  { type: "SAVE_ORDER" }

export type CartState = {
  data: MenuItem[]
  cart: OrderItem[]
  tip: number
} 

export const initialState = {
  data: menuItems,
  cart: [],
  tip: 0
}

let updatedCart: OrderItem[] = []

export const cartReducer = (state: CartState = initialState, action: CartAction) => {
  switch (action.type) {
    case "ADD_CART": {
      const itemExists = state.cart.find((order) => order.id === action.payload.menu.id);
      if (itemExists) {
        updatedCart = state.cart.map((orderItem) =>
          orderItem.id === action.payload.menu.id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem 
        )
      } else {
        const newItem: OrderItem = { ...action.payload.menu, quantity: 1 }
        updatedCart = [ ...state.cart, newItem ]
      }
      return { ...state, cart: updatedCart } 
    }
    case "REMOVE_FROMCART": {
      const filteredItems = state.cart.filter((item) => item.id !== action.payload.id);
      return { ...state, cart: filteredItems }
    }
    case "SET_TIP": 
     return { ...state, tip: action.payload.tip }
    case "SAVE_ORDER":
      return { ...state, cart: [], tip: 0 }
  }
}