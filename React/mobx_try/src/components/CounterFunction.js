import React, {useState} from 'react';
import { observer, useLocalObservable, Observer } from 'mobx-react';

export const CounterFunction = 
	({initialCount}) => {

		const store = useLocalObservable(() => { return  ({ 
			counter: initialCount ?? 0, 
			inc() { this.counter++ },
			dec() { this.counter-- },
		
		})});
		
		return (
			<div>
				<button onClick={store.dec}>-</button>
				<Observer>{() => (
					<span>{store.counter}</span>
				) }
				</Observer>
				<button onClick={store.inc}>+</button>
			</div>
		);
	}


/* import React, {useState} from 'react';

export function CounterFunction({initialCount}) {
	const [counter, setCounter] = useState(initialCount ?? 0);
	
	const inc = () => setCounter((prevstate) => prevstate + 1);
	const dec = () => setCounter((prevstate) => prevstate - 1);
	
	return (
		<div>
			<button onClick={dec}>-</button>
			<span>{counter}</span>
			<button onClick={inc}>+</button>
		</div>
	);
}
*/