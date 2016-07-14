

var Hello = React.createClass({displayName: "Hello",
	render:function(){
		return (
			React.createElement("div", null
			)
			)
	}
});

ReactDOM.render(React.createElement(Hello, null),document.getElementById('example'))