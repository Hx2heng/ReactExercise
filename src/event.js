//事件处理器将会传入虚拟事件对象的实例，一个对浏览器本地事件的跨浏览器封装。
//它有和浏览器本地事件相同的属性和方法，包括 stopPropagation() 和 preventDefault()，但是没有浏览器兼容问题。
// 通过e.nativeEvent可以获取原生的event对象
// 通过e.target 返回触发事件的元素
var Component = React.createClass({
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
			<div>
				<p>当前计数：{this.state.count}</p>
				<button onClick={this.clickHandle}>点击+1</button>
			</div>
			)
	}
})

ReactDOM.render(<Component />,document.getElementById('example'));