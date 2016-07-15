var Comp= React.createClass({displayName: "Comp",
	mixins: [ React.addons.LinkedStateMixin ],
	getInitialState:function(){
		return {
			message:''
		}
	},
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("input", {type: "text", value: this.state.message})
			)
			)
	}
})

ReactDOM.render(React.createElement(Comp, null),document.getElementById('example'))