
alert(1);
var Hello = React.creatClass({
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, "Hello React")
			)
			)
	}
});

ReactDOM.render(React.createElement(Hello, null),document.getElementById('example'))