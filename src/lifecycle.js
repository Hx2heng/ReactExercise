var Comp = React.createClass({
	getInitialState:function(){
		console.log('getInitialState');
		return {
			count:0
		}
	},
	getDefaultProps :function(){
		console.log('getDefaultProps')
	},
	componentWillMount :function(){
		console.log('componentWillMount')
	},
	componentDidMount :function(){
		console.log('componentDidMount')
	},
	componentWillReceiveProps:function(){
		console.log('componentWillReceiveProps')
	},
	shouldComponentUpdate:function(){
		console.log('shouldComponentUpdate');
		return true
	},
	componentWillUpdate:function(){
		console.log('componentWillUpdate')
	},
	componentDidUpdate:function(){
		console.log('componentDidUpdate')
	},
	componentWillUnmount :function(){
		console.log('componentWillUnmount ')
	},
	clickHandle:function(){
		this.setState({
			count:this.state.count+1
		})
	},
	deleteComp:function(){
		ReactDOM.unmountComponentAtNode(  document.getElementById('example') );
	},
	render:function(){
		return (
			<div>
				<p>React Compenent’s Lifecycle{this.props['data-x']}</p>
				<p>count:{this.state.count}</p>
				<button onClick = {this.clickHandle}>count+1</button>
				<button onClick = {this.deleteComp }>deleteComp</button>
			</div>
			)
	}
})
ReactDOM.render(<Comp data-x="!"/>,document.getElementById('example'))