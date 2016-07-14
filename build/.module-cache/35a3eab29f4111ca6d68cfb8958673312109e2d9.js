

// var Hello = React.createClass({
// 	render:function(){
// 		return (
// 			<div>
// 				<h1>Hello React</h1>
// 			</div>
// 			)
// 	}
// });

// ReactDOM.render(<Hello/>,document.getElementById('example'))
// 
var MessageBox = React.createClass({displayName: "MessageBox",
			alertMe: function(){
				alert('你刚才点了我一下。。。。');
			},
			render:function(){
				return ( React.createElement("h1", {onClick: this.alertMe}, "你好世界！！！") )
			}
		});

		ReactDOM.render( React.createElement(MessageBox, null), 
			document.getElementById('example'),
			function(){
				console.log('渲染完成啦！！');
			}
		)