var Form = React.createClass({displayName: "Form",
	getInitialState:function() {
	    return {
	        userName:'',
	        sex:'man',
	        profession:'前端开发工程师'
	    };
	},
	submitEvent:function(e){
		e.preventDefault();
	    var data ={
	    	userName : this.refs.userName.value,
	    	sex : this.state.sex,
	    	profession : this.state.profession,
	    	
	    }

	    console.log(data)
	},
	radioClick:function(e){
		this.setState({
			sex:e.target.value
		})
	},
	selectEvent:function(e){
		console.log(e.target);
		this.setState({
			profession:e.target.value
		})
	},
	render:function(){
		return (
				React.createElement("form", null, 
					React.createElement("p", null, "用户名"), 
					React.createElement("input", {type: "text", name: "username", ref: "userName", value: this.state.username}), 

					React.createElement("p", null, "性别"), 
					React.createElement("label", {htmlFor: "man"}, "man"), 
					React.createElement("input", {type: "radio", name: "sex", id: "man", onClick: this.radioClick, value: "man", defaultChecked: true}), 
					React.createElement("label", {htmlFor: "women"}, "women"), 
					React.createElement("input", {type: "radio", name: "sex", id: "women", onClick: this.radioClick, value: "women"}), 

					React.createElement("p", null, "职业"), 
					React.createElement(SelectComponent, {selectEvent: this.selectEvent}), 

					React.createElement("p", null), 
					React.createElement("input", {type: "submit", value: "submit", onClick:  this.submitEvent})
				)
			)
	}
})
var SelectComponent = React.createClass({displayName: "SelectComponent",

	render:function(){
		return (
			React.createElement("select", {defaultValue: "前端工程师", onChange: this.props.selectEvent}, 
				React.createElement("option", {value: "前端工程师"}, "前端工程师"), 
				React.createElement("option", {value: "php开发工程师"}, "php开发工程师")
			)
			)
	}
});

ReactDOM.render(React.createElement(Form, null),document.getElementById('example'))