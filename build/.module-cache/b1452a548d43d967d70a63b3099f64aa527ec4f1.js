//通过引入React.addons.LinkedStateMixin 实现双向数据绑定
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
				React.createElement("p", null, this.state.message), 
				React.createElement("input", {type: "text", valueLink: this.linkState('message')})
			)
			)
	}
})
//自制addon
var newAddon = {
	showSelf:function(){
		console.log(this)
	}
}
var Comp2 = React.createClass({displayName: "Comp2",
	mixins: [ newAddon ],
	getInitialState:function(){
		return {
			message:''
		}
	},
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("button", {onClick: this.showSelf}, "hello"), 
				React.createElement(Comp3, {clickEvent: this.showSelf})
			)
			)
	}
})
var Comp3 = React.createClass({displayName: "Comp3",
	mixins: [ newAddon ],
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("button", {onClick: this.showSelf}, "hello2")
			)
			)
	}
})
ReactDOM.render(React.createElement(Comp, null),document.getElementById('example'))
ReactDOM.render(React.createElement(Comp2, null),document.getElementById('example2'))