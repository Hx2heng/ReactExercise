//
var Component = React.createClass({displayName: "Component",
	getInitialState:function(){
		return {
			count:0
		}
	},
	clickHandle:function(e){
		console.log(e);
		console.log(e.nativeEvent);
		this.setState({
			count:this.state.count+1
		})
	},
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("p", null, "当前计数：", this.state.count), 
				React.createElement("button", {onClick: this.clickHandle}, "点击+1")
			)
			)
	}
})

ReactDOM.render(React.createElement(Component, null),document.getElementById('example'));