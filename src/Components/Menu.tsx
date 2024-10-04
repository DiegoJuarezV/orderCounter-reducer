import { MenuItem } from "../types";

type MenuProps = {
  item: MenuItem
}

const Menu = ({ item } : MenuProps) => {
  const { name, price } = item;

  return (
    <>
      <button
        className=" 
          border-2 
          border-teal-400 
          hover:bg-teal-200 
          w-full 
          p-3 flex 
          justify-between"
      >
        <p>Nombre: {name}</p>
        <p className=" font-black">Precio: ${price}</p> 
      </button>
    </>
  )
}

export default Menu;