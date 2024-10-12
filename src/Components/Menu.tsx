import { CartAction } from "../reducers/order-reducer";
import { MenuItem } from "../types";

type MenuProps = {
  item: MenuItem
  dispatch: React.Dispatch<CartAction>
}

const Menu = ({ item, dispatch } : MenuProps) => {
  const { name, price } = item;

  const addCart = () => {
    dispatch({ type: 'ADD_CART', payload: { menu: item } })
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