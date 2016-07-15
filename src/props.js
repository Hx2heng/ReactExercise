//由于 this.props 和 this.state 都用于描述组件的特性，可能会产生混淆。一个简单的区分方法是，
//this.props 表示那些一旦定义，就不再改变的特性，而 this.state 是会随着用户互动而产生变化的特性。 ---阮一峰

var Component = React.createClass({
	getInitialState : function(){
	    return {
	        author:"Hx2"
	    };
	},
	render:function(){
		return (
			<div>
				<Component1 author={this.state.author}/>
			</div>
			)
	}
})

var Component1 = React.createClass({
	render:function(){
		return (
			<div>
				<h1>{this.props.author} (come from props)</h1>
			</div>
			)
	}
})

ReactDOM.render(<Component />,document.getElementById('example'))