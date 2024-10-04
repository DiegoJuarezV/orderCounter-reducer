import { useState } from "react";
import { menuItems } from "../data/db";
import Menu from "./Menu";
import { MenuItem } from "../types";


const Home = ()  => {
  const [data] = useState<MenuItem[]>(menuItems);

  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <section className="p-5">
        <h2 className="text-4xl font-black">Menú</h2>
        <div className="space-y-3 mt-10">
          {data.map((item) => (
            <Menu 
              key={item.id} 
              item={item} 
            />
          ))}
        </div>
      </section>
      <div>
        <h2>Consumo</h2>
      </div>
    </main>
  )
}

export default Home;