var Component  = React.createClass({displayName: "Component",
	getInitialState:function(){
		return {
			count:0
		}
	},
	clickHandle:function(){
		this.setState({
			count:this.state.count+1
		})
	},
	render:function(){
		return (
			React.createElement("div", null, 
			React.createElement("p", null, "现在计数：", this.state.count), 
			React.createElement("button", {onClick: this.addCount}, "点击+1"), 
			React.createElement("button", {onClick: this.reduceCount}, "点击+1")
			)
			)
	}
})

ReactDOM.render(React.createElement(Component, null),document.getElementById("example"))