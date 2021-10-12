import {action, makeObservable, observable, computed, makeAutoObservable } from 'mobx';

export class CounterStoreClass {
	counter = 0;
	
	get color() {
		return this.counter > 0 ? 'green' : this.count < 0 ? 'red' : 'black';
	}
	
	constructor() { /*
		makeObservable(this, {
			counter: observable,
			color: computed,
			dec: action,
			inc: action.bound,
		});*/
		makeAutoObservable(this, {inc: action.bound});
	}
	
	dec = () => this.counter--;
	inc() {
		this.counter++;
	}
	
	
} 