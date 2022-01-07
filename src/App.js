import { useState, useEffect, useReducer, Fragment  } from 'react';
import './App.css';


const { React } = window


function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error();
  }
}


function App() {
  const [state, dispatch] = useReducer(reducer, 1);
  console.log(state)


  const [count, setCount] = useState(0);
  console.log(count)

  const colors = {
    Sea: '#a2ccb6',
    Sand: '#fceeb5',
    Peach: '#ee786e',
  }

  const [color, setColor] = useState(colors.Sea)
  useEffect(
    () => {
      document.body.style.background = color
    },
    [color]
  )
  return (
    <Fragment>

    <div className="App">

      <section>
        <h1>useReducer example</h1>
        Count: {state}
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      </section>
<br/>
      <section>
        <h1>useState example</h1>
        <p>This button has been clicked {count} times!</p>
        <button onClick={() => setCount(count + 1)}>click me!</button>
      </section>
<br/>
      <section>
        <h1>useEffect example</h1>
          <select value={color} onChange={e => setColor(e.target.value)}>
            {Object.entries(colors).map(([name, value]) => (
              <option key={`color--${name}`} value={value}>
                {name}
              </option>
            ))}
          </select>
          <h1>{color}</h1>
      </section>
<br/>
    </div>
    </Fragment>

  );
}

export default App;
