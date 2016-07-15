var Form = React.createClass({displayName: "Form",
	render:function(){
		return (
				React.createElement("form", null, 
					React.createElement("input", {type: "text", name: "username", ref: "userName"}), 
					React.createElement("label", {forHtml: "sex"}, "man"), 
					React.createElement("input", {type: "checkbox", name: "sex", checked: true}), 
					React.createElement("input", {type: "checkbox", name: "sex", checked: true})
				)
			)
	}
})

ReactDOM.render(React.createElement(Form, null),document.getElementById('example'))