import React, { useReducer, createContext, useContext } from 'react';
import './CounterContext.css';

// Create a Context for the Counter
const CounterContext = createContext();

// Reducer function to manage counter state
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    case 'RESET':
      return 0;
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

// Provider component to wrap the app
const CounterProvider = ({ children }) => {
  const [count, dispatch] = useReducer(counterReducer, 0);

  return (
    <CounterContext.Provider value={{ count, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

// Custom hook to use the CounterContext
const useCounter = () => {
  const context = useContext(CounterContext);
  if (!context) {
    throw new Error('useCounter must be used within a CounterProvider');
  }
  return context;
};

const Counter = () => {
  const { count, dispatch } = useCounter();

  return (
    <div className="counter">
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  );
};

const App = () => {
  return (
    <CounterProvider>
      <div className="app">
        
        <Counter />
      </div>
    </CounterProvider>
  );
};

export default App;
