class GroceryListItem extends React.Component {
	render() {
		return (
			<li style={this.props.style} onClick={this.props.onClick}>{this.props.item}</li>
		)
	}
}


class GroceryList extends React.Component {
		
	constructor() {
		super();
		this.state = {
			done: false,
			hover: false
		};
	}

	_onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}

	_getItems() {
	 	const items = ['cucumber', 'apple', 'bagel'];

	 	let style = {
			textDecoration: this.state.done ? 'line-through' : 'none',
			'font-weight': 'normal'
		};

		return items.map((value) => {
	 		return (
				<GroceryListItem onClick={this._onListItemClick.bind(this)} style={style} item={value} />
			)
		})
	}

	_onMouseEvent() {
		this.setState({
			hover: !this.state.hover
		})
	}

	render() {
		let food = this._getItems();

		let style = {
			'font-weight': this.state.hover ? 'bold' : 'normal'
		};

		return (
			<ul onMouseEnter={this._onMouseEvent.bind(this)} onMouseLeave={this._onMouseEvent.bind(this)} style={style}>GroceryList
				{food}
			</ul>
		)
	}
}


ReactDOM.render(
	<GroceryList />, document.getElementById('app')
);


