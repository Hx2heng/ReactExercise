// 通过e.nativeEvent可以获取原生的event对象
// 通过e.target 返回触发事件的元素
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
		console.log(e.target)
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