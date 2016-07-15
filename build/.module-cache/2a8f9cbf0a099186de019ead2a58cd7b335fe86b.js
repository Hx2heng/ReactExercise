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

ReactDOM.render(React.createElement(Comp, null),document.getElementById('example'))