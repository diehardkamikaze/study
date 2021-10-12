import {computed, observable, action, makeObservable} from 'mobx';

export function counterStoreFunction() {
	return makeObservable({ 
			counter: 0, 
			get color() {
				return this.counter > 0 ? 'green' : this.counter < 0 ? 'red' : 'black';
			},
			inc() { this.counter++ },
			dec() { this.counter-- },
		
		}, {
			counter: observable,
			color: computed,
			dec: action.bound,
			inc: action.bound,
			
		});
	
}
	