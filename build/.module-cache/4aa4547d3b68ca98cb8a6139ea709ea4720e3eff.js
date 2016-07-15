var Component = React.createClass({displayName: "Component",
	getInitialState : function(){
	    return {
	        message:"hello"
	    };
	},
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement(Component1, {message: this.state.message})
			)
			)
	}
})

var Component1 = React.createClass({displayName: "Component1",
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, this.props.message)
			)
			)
	}
})

ReactDOM.render(React.createElement(Component, null),document.getElementById('example'))