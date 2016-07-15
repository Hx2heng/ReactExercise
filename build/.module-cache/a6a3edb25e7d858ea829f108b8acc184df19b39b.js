var Comp = React.createClass({displayName: "Comp",
	getInitialState:function(){
		console.log('getInitialState');
		return {}
	},
	getDefaultProps :function(){
		console.log('getDefaultProps')
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