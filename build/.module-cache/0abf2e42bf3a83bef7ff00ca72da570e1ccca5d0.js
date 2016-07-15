//由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，
//this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。 ---阮一峰

var Component = React.createClass({displayName: "Component",
	getInitialState : function(){
	    return {
	        author:"Hx2"
	    };
	},
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement(Component1, {author: this.state.author})
			)
			)
	}
})

var Component1 = React.createClass({displayName: "Component1",
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("h1", null, this.props.author, " (come from props)")
			)
			)
	}
})

ReactDOM.render(React.createElement(Component, null),document.getElementById('example'))