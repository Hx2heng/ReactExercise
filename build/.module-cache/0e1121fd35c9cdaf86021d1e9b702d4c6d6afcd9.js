var Form = React.createClass({displayName: "Form",
	render:function(){
		return (
				React.createElement("form", null, 
					React.createElement("input", {type: "text", name: "username", ref: "userName"}), 
					React.createElement("label", {forHtml: "man"}, "man"), 
					React.createElement("input", {type: "checkbox", forHtml: "sex", name: "man", ref: "sex", checked: true}), 
					React.createElement("label", {forHtml: "women"}, "women"), 
					React.createElement("input", {type: "checkbox", forHtml: "sex", name: "women", ref: "sex", checked: true})
				)
			)
	}
})

ReactDOM.render(React.createElement(Form, null),document.getElementById('example'))