import { CartAction } from "../reducers/order-reducer"

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

type TipFormProps = {
  dispatch: React.Dispatch<CartAction>
}
 
const TipForm = ({ dispatch } : TipFormProps) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tipValue = (+e.target.value);
    dispatch({ type: 'SET_TIP', payload: { tip: tipValue } })
  }

  return (
    <div>
      <h3 className="font-black text-2xl">Propina:</h3>
      <form action="">
        {tipOptions.map(tip => (
          <div key={tip.id} className="flex gap-2">
            <label htmlFor={tip.id}>{tip.label}</label>
            <input 
              type="radio"
              id={tip.id}
              name="tip"
              value={tip.value}
              onChange={handleChange} 
            />
          </div>
        ))}
      </form>
    </div>
  )
}

export default TipForm;