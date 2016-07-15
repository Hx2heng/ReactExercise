//React 新版本把 ReactDom 分离了出来
//组件名字首字符必须大写
//组件属性 class 改为className ， for 改为 htmlFor
//每个组件都需要有render函数
//render函数返的html必须包含在一个顶级元素中
//标签都要闭合
var Hello = React.createClass({
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
			color:'red'
		};
		return (
			<div>
				<h1 onClick={this.clickHandle} style={style}>Hello React</h1>
				<input type="button" value="button"/>
			</div>
			)
	}
});

ReactDOM.render(<Hello/>,document.getElementById('example'),function(){
	console.log("render finish callback")
})