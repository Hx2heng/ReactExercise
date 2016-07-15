var Form = React.createClass({displayName: "Form",
	render:function(){
		return (
				React.createElement("form", null, 
					React.createElement("input", {type: "text", name: "username", ref: "userName"}), 
					React.createElement("label", {htmlFor: "man"}, "man"), 
					React.createElement("input", {type: "radio", name: "sex", id: "man"}), 
					React.createElement("label", {htmlFor: "women"}, "women"), 
					React.createElement("input", {type: "radio", name: "sex", id: "women"}), 

					React.createElement("input", {type: "submit", value: "submit", onClick:  this.submitEvent})
				)
			)
	}
})

ReactDOM.render(React.createElement(Form, null),document.getElementById('example'))