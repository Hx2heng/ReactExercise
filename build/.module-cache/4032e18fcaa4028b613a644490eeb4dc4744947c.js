var Component = React.createClass({displayName: "Component",
	render:function(){
		return (
			React.createElement("div", null
			)
			)
	}
})

var Component1 = React.createClass({displayName: "Component1",
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("h2", null, "This is component1")
			)
			)
	}
})

var Component2 = React.createClass({displayName: "Component2",
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("h2", null, "This is component2")
			)
			)
	}
})

ReactDOM.render(React.createElement(Component, null),document.getElementById('example'));