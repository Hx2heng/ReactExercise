var Comp= React.createClass({displayName: "Comp",
	mixins: [ React.addons.LinkedStateMixin ],
	getInitialState:function(){
		return {
			message:''
		}
	},
	render:function(){
		return (
			React.createElement("div", null

			)
			)
	}
})

ReactDOM.render(React.createElement(Comp, null),document.getElementById('example'))