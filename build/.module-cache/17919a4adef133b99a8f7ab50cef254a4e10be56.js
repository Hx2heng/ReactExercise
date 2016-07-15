//
var Component = React.createClass({displayName: "Component",

	redner:function(){
		return (
			React.createElement("div", null, 
				React.createElement("p", null, "当前计数：", this.state.count), 
				React.createElement("button", {onClick: this.handClick}, "点击+1")
			)
			)
	}
})

ReactDOM.render(React.createElement(Component, null),document.getElementById('example'));