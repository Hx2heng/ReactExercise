var Form = React.createClass({displayName: "Form",
	render:function(){
		return (
				React.createElement("form", null, 
					React.createElement("input", {type: "text", name: "username", ref: "userName"}), 
					
					React.createElement("input", {type: "radio", name: "sex", value: "man"}), 
					React.createElement("input", {type: "radio", name: "sex", value: "women"})
				)
			)
	}
})

ReactDOM.render(React.createElement(Form, null),document.getElementById('example'))