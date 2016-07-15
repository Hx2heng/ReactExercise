//
var Component = React.createClass({displayName: "Component",

	redner:function(){
		return (
			React.createElement("div", null, 
				React.createElement("button", {onClick: this.handClick})
			)
			)
	}
})

ReactDOM.render(React.createElement(Component, null),document.getElementById('example'));