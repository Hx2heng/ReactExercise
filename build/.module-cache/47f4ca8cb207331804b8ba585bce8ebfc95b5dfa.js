var Comp = React.createClass({displayName: "Comp",
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("p", null, "React Compenent’s Lifecycle")
			)
			)
	}
})
ReactDOM.render(React.createElement(Comp, null),document.getElementById('example'))