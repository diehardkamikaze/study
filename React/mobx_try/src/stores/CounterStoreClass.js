import {action, makeObservable, observable, computed, makeAutoObservable, autorun, when, reaction } from 'mobx';

export class CounterStoreClass {
	counter = 0;
	
	get color() {
		return this.counter > 0 ? 'green' : this.counter < 0 ? 'red' : 'black';
	}
	
	constructor() { 
		makeObservable(this, {
			counter: observable,
			color: computed,
			dec: action,
			inc: action.bound,
		});
		
		autorun(() => console.log(`count: ${this.counter}`));
		when(() => this.counter > 5, () => console.log(`count: ${this.counter} > 5`) );
		const disposer = reaction(() => this.counter, (count, prevCount) => { console.log(`${count} and ${prevCount}`);
			if (count > 5)
				disposer();
		
		});
	}
	
	dec = () => this.counter--;
	inc() {
		this.counter++;
	}
	
	
} 