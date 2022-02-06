import React, {Component} from 'react';
import { observer } from 'mobx-react';
import {CounterStoreClass} from '../stores/CounterStoreClass.js';
import 	{ runInAction, autorun } from 'mobx';

const store = new CounterStoreClass();

autorun(() => console.log(`color: ${store.color}`));


export const CounterClass = observer(class extends Component {	

	componentDidMount() {
		// store.counter = this.props.initialCount ?? 0;
		runInAction(() => { store.counter = this.props.initialCount ?? 0; });
	}

	render() {
		return (
			<div>
			<button onClick={store.dec}>-</button>
			<span style={{color: store.color, fontWeight: 'bold'}}>{store.counter}</span>
			<button onClick={store.inc}>+</button>
			</div>
		);
	}

});


/* import React, {Component} from 'react';

export class CounterClass extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			counter: this.props.initialCount ?? 0,
		}
		this.inc = this.inc.bind(this);
	}
	render() {
		return (
			<div>
			<button onClick={this.dec}>-</button>
			<span>{this.state.counter}</span>
			<button onClick={this.inc}>+</button>
			</div>
		);
	}

	dec = () => this.setState((prevState) => ({ counter: prevState.counter - 1}));
	inc() {
			this.setState((prevState) => ({ counter: prevState.counter + 1}));
	}
}*/

