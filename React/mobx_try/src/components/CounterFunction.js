import React, {useState, useEffect} from 'react';
import { observer} from 'mobx-react';
import { runInAction } from 'mobx';
import { counterStoreFunction } from '../stores';

const store = counterStoreFunction();

export const CounterFunction = observer(
	({initialCount}) => {
		useEffect(() => {
			runInAction(() => store.counter = initialCount ?? 0);  
		}, [initialCount]);
		
		return (
			<div>
				<button onClick={store.dec}>-</button>
				<span style={{ color: store.color, fontWeight: 'bold' }}>{store.counter}</span>
				<button onClick={store.inc}>+</button>
			</div>
		);
	});

/*
export const CounterFunction = 
	({initialCount}) => {

		const store = useLocalObservable(() => { return  ({ 
			counter: initialCount ?? 0, 
			get color() {
				return this.counter > 0 ? 'green' : this.counter < 0 ? 'red' : 'black';
			},
			inc() { this.counter++ },
			dec() { this.counter-- },
		
		})});
		
		return (
			<div>
				<button onClick={store.dec}>-</button>
				<Observer>{() => (
					<span style={{ color: store.color, fontWeight: 'bold' }}>{store.counter}</span>
				) }
				</Observer>
				<button onClick={store.inc}>+</button>
			</div>
		);
	}
*/

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