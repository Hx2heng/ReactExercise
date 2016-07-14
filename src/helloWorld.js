
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
		return (
			<div>
				<h1 onClick={this.clickHandle}>Hello React</h1>
			</div>
			)
	}
});

ReactDOM.render(<Hello/>,document.getElementById('example'))