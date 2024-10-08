import { useMemo } from "react";
import { OrderItem } from "../types";

type OrderTotalsProps = {
  cart: OrderItem[]
  tip: number
  setCart: React.Dispatch<React.SetStateAction<OrderItem[]>>
  setTip: React.Dispatch<React.SetStateAction<number>>
}

const OrderTotals = ({ cart, tip, setCart, setTip } : OrderTotalsProps) => {
  const subtotalAmount = useMemo(() => cart.reduce((total, item) => total + (item.quantity * item.price), 0), [cart]);
  const tipAmount = useMemo(() => subtotalAmount * tip, [tip, cart]);
  const totalAmount = useMemo(() => subtotalAmount + tipAmount , [tip, cart]);

  const saveOrder = () => {
    setCart([]);
    setTip(0);
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