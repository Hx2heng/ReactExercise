var Comp= React.createClass({displayName: "Comp",
	mixins: [ React.addons.LinkedStateMixin ],
	render:function(){
		return (
			React.createElement("div", null

			)
			)
	}
})

ReactDOM.render(React.createElement(Comp, null),document.getElementById('example'))