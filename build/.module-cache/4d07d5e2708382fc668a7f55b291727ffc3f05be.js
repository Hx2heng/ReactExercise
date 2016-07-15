//React 新版本把 ReactDom 分离了出来
//每个组件都需要有render函数
//组件名字首字符必须答谢
//组件属性 class 改为className ， for 改为 htmlFor
var Hello = React.createClass({displayName: "Hello",
	getInitialState:function() {
	    return {
			alertWord:"click"
	    };
	},
	clickHandle:function(){
		alert(this.state.alertWord);
	},
	render:function(){
		return (
			React.createElement("div", null, 
				React.createElement("h1", {onClick: this.clickHandle}, "Hello React")
			)
			)
	}
});

ReactDOM.render(React.createElement(Hello, null),document.getElementById('example'))