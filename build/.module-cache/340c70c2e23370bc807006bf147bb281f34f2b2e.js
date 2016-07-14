

var Hello = React.createClass({displayName: "Hello",
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, "Hello React")
			)
			)
	}
});

React.render(React.createElement(Hello, null),document.getElementById('example'))