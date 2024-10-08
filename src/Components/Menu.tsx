import { MenuItem, OrderItem } from "../types";

type MenuProps = {
  item: MenuItem
  cart: OrderItem[]
  setCart:  React.Dispatch<React.SetStateAction<OrderItem[]>>
}

const Menu = ({ item, cart, setCart } : MenuProps) => {
  const { name, price, id } = item;

  const addCart = () => {
    const itemExists = cart.find((order) => order.id === id);

    if (itemExists) {
      setCart((prevCart) => prevCart.map(orderItem =>
        orderItem.id === id ? { ...orderItem, quantity: orderItem.quantity + 1 } : orderItem
      ))
    } else {
      const newItem: OrderItem = { ...item, quantity: 1 };
      setCart([ ...cart, newItem ]);
    }
  }

  return (
    <>
      <button
        onClick={addCart}
        className=" 
          border-2 
          border-teal-400 
          hover:bg-teal-200 
          w-full 
          p-3 flex 
          justify-between"
      >
        <p>{name}</p>
        <p className=" font-black">Precio: ${price}</p> 
      </button>
    </>
  )
}

export default Menu;