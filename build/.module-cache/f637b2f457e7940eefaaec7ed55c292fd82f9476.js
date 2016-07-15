var Comp = React.createClass({displayName: "Comp",
	getInitialState:function(){
		console.log('getInitialState');
		return {}
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
		console.log('shouldComponentUpdate')
	},
	componentWillUpdate:function(){
		console.log('componentWillUpdate')
	},
	componentDidUpdate:function(){
		console.log('componentDidUpdate')
	},
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("p", null, "React Compenent’s Lifecycle")
			)
			)
	}
})
ReactDOM.render(React.createElement(Comp, null),document.getElementById('example'))