import { useState } from "react";
import { menuItems } from "../data/db";
import Menu from "./Menu";
import { MenuItem, OrderItem } from "../types";
import OrderCounter from "./OrderCounter";
import OrderTotals from "./OrderTotals";
import TipForm from "./TipForm";


const Home = ()  => {
  const [data] = useState<MenuItem[]>(menuItems);
  const [cart, setCart] = useState<OrderItem[]>([]);
  const [tip, setTip] = useState(0);

  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <section className="p-5">
        <h2 className="text-4xl font-black">Menú</h2>
        <div className="space-y-3 mt-10">
          {data.map((item) => (
            <Menu 
              key={item.id} 
              item={item}
              cart={cart}
              setCart={setCart}
            />
          ))}
        </div>
      </section>
      <section className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        {cart.length ? (
          <>
            <OrderCounter
              cart={cart}
              setCart={setCart}
            />
            <TipForm
              setTip={setTip} 
            />    
            <OrderTotals
              cart={cart} 
              tip={tip}
              setCart={setCart}
              setTip={setTip}
            />
          </>
        ) : (
          <p className="text-center">La orden está vacia</p>
        )}
      </section>
    </main>
  )
}

export default Home;