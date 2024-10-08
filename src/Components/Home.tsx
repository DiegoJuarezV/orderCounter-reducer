import { useState } from "react";
import { menuItems } from "../data/db";
import Menu from "./Menu";
import { MenuItem, OrderItem } from "../types";
import OrderCounter from "./OrderCounter";


const Home = ()  => {
  const [data] = useState<MenuItem[]>(menuItems);
  const [cart, setCart] = useState<OrderItem[]>([])

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
        <OrderCounter
          cart={cart}
          setCart={setCart}
         />
      </section>
    </main>
  )
}

export default Home;