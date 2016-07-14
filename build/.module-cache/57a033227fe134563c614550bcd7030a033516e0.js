
var Hello = React.createClass({displayName: "Hello",
	getInitialState:function() {
	    return {
			alertWord:"click"
	    };
	},
	clickHandle:function(){
		alert(this.state.alertWord);
	},
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("h1", {onClick: this.clickHandle}, "Hello React")
			)
			)
	}
});

ReactDOM.render(React.createElement(Hello, null),document.getElementById('example'))