var Component = React.createClass({displayName: "Component",
	render:function(){
		var manyComponents = [];
		var oneComponent = React.createElement(Component1, null);
		for(var i=0;i<10;i++){
			manyComponents.push(oneComponent);
		}
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, "There is component"), 
				React.createElement(Component1, null), 
				React.createElement(Component2, null), 

				manyComponents
			)
			)
	}
})

var Component1 = React.createClass({displayName: "Component1",
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("h5", null, "There is component1")
			)
			)
	}
})

var Component2 = React.createClass({displayName: "Component2",
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("h5", null, "There is component2")
			)
			)
	}
})

ReactDOM.render(React.createElement(Component, null),document.getElementById('example'));