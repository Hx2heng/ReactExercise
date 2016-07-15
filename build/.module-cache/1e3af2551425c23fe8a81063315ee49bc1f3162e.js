var Form = React.createClass({displayName: "Form",
	submitEvent:function(e){
		e.preventDefault();
	    var data ={
	    	userName : this.refs.userName,
	    	sex : this.refs.sex
	    }
	},
	render:function(){
		return (
				React.createElement("form", null, 
					React.createElement("p", null, "用户名"), 
					React.createElement("input", {type: "text", name: "username", ref: "userName"}), 

					React.createElement("p", null, "性别"), 
					React.createElement("label", {htmlFor: "man"}, "man"), 
					React.createElement("input", {type: "radio", name: "sex", id: "man", refs: "sex"}), 
					React.createElement("label", {htmlFor: "women"}, "women"), 
					React.createElement("input", {type: "radio", name: "sex", id: "women", refs: "sex"}), 

					React.createElement("p", null), 
					React.createElement("input", {type: "submit", value: "submit", onClick:  this.submitEvent})
				)
			)
	}
})

ReactDOM.render(React.createElement(Form, null),document.getElementById('example'))