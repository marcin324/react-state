var Counter = React.createClass({

	getInitialState: function(){
		return {
			counter: 0
		};
	},

	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		})
	},

	multiplication: function(){
		this.setState({
			counter: this.state.counter * 2
		})
	},

	reset: function(){
		this.setState({
			counter: this.state.counter * 0
		})
	},

	render: function() {
        return React.createElement('div', {className: 'counter'},
            React.createElement('span', {}, 'Licznik: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment}, 'Dodaj jeden'),
            React.createElement('button', {onClick: this.decrement}, 'Odejmij jeden'),
            React.createElement('button', {onClick: this.multiplication}, 'Pomnóż przez dwa'),
            React.createElement('button', {onClick: this.reset}, 'Wyzeruj licznik'),
        )
    }
});

var Counters = React.createClass({

	render: function(){
		return (
			React.createElement('div', {className: 'counters'},
				React.createElement(Counter),
				React.createElement(Counter),
			)
		)
	}
});


var element = React.createElement(Counters);
ReactDOM.render(element, document.getElementById('app'));