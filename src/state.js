//调用setState后会重新执行render

var Component  = React.createClass({
	getInitialState:function(){
		return {
			count:0
		}
	},
	addCount:function(){
		this.setState({
			count:this.state.count+1
		})
	},
	reduceCount:function(){
		this.setState({
			count:this.state.count-1
		})
	},
	render:function(){
		return (
			<div>
			<p>现在计数：{this.state.count}</p>
			<button onClick={this.addCount}>点击+1</button> 
			<button onClick={this.reduceCount}>点击-1</button>
			</div>
			)
	}
})

ReactDOM.render(<Component />,document.getElementById("example"))