import Menu from "./Menu";
import OrderCounter from "./OrderCounter";
import OrderTotals from "./OrderTotals";
import TipForm from "./TipForm";
import { cartReducer, initialState } from "../reducers/order-reducer";
import { useReducer } from "react";

const Home = ()  => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
      <section className="p-5">
        <h2 className="text-4xl font-black">Menú</h2>
        <div className="space-y-3 mt-10">
          {state.data.map((item) => (
            <Menu 
              key={item.id} 
              item={item}
              dispatch={dispatch}
            />
          ))}
        </div>
      </section>
      <section className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
        {state.cart.length ? (
          <>
            <OrderCounter
              state={state}
              dispatch={dispatch}
            />
            <TipForm
              dispatch={dispatch} 
            />    
            <OrderTotals
              state={state}
              dispatch={dispatch}
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