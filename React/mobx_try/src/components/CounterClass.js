import React, {Component} from 'react';
import { observer } from 'mobx-react';
import { makeObservable, observable, action } from 'mobx';


export const CounterClass = observer(class extends Component {
	
	counter = 0;
	
	constructor(props) {
		super(props);
		makeObservable(this, {
			counter: observable,
			dec: action,
			inc: action.bound,
		});
		this.counter = this.props.initialCount ?? 0;
	}
	render() {
		return (
			<div>
			<button onClick={this.dec}>-</button>
			<span>{this.counter}</span>
			<button onClick={this.inc}>+</button>
			</div>
		);
	}

	dec = () => this.counter--;
	inc() {
			this.counter++;
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

