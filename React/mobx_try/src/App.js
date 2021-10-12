import {CounterClass} from './components/CounterClass.js'
import {CounterFunction} from './components/CounterFunction.js'

export default function App() {
  return (
    <>
      <CounterClass initialCount={5} />
      <CounterFunction initialCount={10} />
    </>
  );
}
