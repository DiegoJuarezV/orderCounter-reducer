import { useMemo } from "react";
import { CartAction, CartState } from "../reducers/order-reducer";

type OrderTotalsProps = {
  state: CartState
  dispatch: React.Dispatch<CartAction>
}

const OrderTotals = ({ state, dispatch } : OrderTotalsProps) => {
  const subtotalAmount = useMemo(() => state.cart.reduce((total, item) => total + (item.quantity * item.price), 0), [state.cart]);
  const tipAmount = useMemo(() => subtotalAmount * state.tip, [state.tip, state.cart]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount , [state.tip, state.cart]);

  const saveOrder = () => {
    dispatch({ type: 'SAVE_ORDER' })
  }

  return (
    <>
      <section className="space-y-3">
        <h2 className="font-black text-2xl">Totales y propina</h2>
        <p>Subtotal a pagar: <span className="font-bold">${subtotalAmount}</span></p>
        <p>Propina: <span className="font-bold">${tipAmount}</span></p>
        <p>Total a pagar: <span className="font-bold">${totalAmount}</span></p>
      </section>
      <button
        className="w-full bg-black p-3 uppercase text-white font-bold mt-10 disabled:opacity-10"
        disabled={totalAmount === 0} 
        onClick={saveOrder}
      >
        Guardar orden
      </button>
    </>
  )
}

export default OrderTotals;