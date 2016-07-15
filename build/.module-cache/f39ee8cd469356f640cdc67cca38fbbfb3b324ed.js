//React 新版本把 ReactDom 分离了出来
//组件名字首字符必须大写
//组件属性 class 改为className ， for 改为 htmlFor
//每个组件都需要有render函数
//render函数返的html必须包含在一个顶级元素中
//标签都要闭合
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
		var style = {
			fontColor:red
		};
		return (
			React.createElement("div", null, 
				React.createElement("h1", {onClick: this.clickHandle, style: style}, "Hello React"), 
				React.createElement("input", {type: "button"})
			)
			)
	}
});

ReactDOM.render(React.createElement(Hello, null),document.getElementById('example'),function(){
	console.log("render finish callback")
})