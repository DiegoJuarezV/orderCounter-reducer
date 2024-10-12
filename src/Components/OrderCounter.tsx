import { CartAction, CartState } from "../reducers/order-reducer";

type OrderProps = {
  state: CartState
  dispatch: React.Dispatch<CartAction>
}

const OrderCounter = ({ state, dispatch } : OrderProps) => {

  const removeItem = (id: number) => {
    dispatch({ type: 'REMOVE_FROMCART', payload: { id } })
  }

  return (
    <section>
      <h2 className="font-black text-4xl">Consumo</h2>
      
      <div className="space-y-3 mt-10">
        {state.cart.map(item => (
          <div key={item.id} className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">
            <div>
              <p className="text-lg">{item.name} - ${item.price}</p>
              <p className="font-black">Cantidad: {item.quantity} - ${item.quantity * item.price}</p>
            </div>

            <button onClick={() => removeItem(item.id)} className="bg-red-600 h-8 w-8 rounded-full text-white font-black">
              X
            </button>
          </div>
          ))
        }
      </div>
    </section>
  )
}

export default OrderCounter;