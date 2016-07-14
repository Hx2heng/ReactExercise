var Component = React.createClass({
	render:function(){
		var manyComponents = [];
		var oneComponent = <Component1/>;
		for(var i=0;i<10;i++){
			manyComponents.push(oneComponent);
		}
		return (
			<div>
				<h1>There is component</h1>
				<Component1/>
				<Component2/>

				{manyComponents}
			</div>
			)
	}
})

var Component1 = React.createClass({
	render:function(){
		return (
			<div>
				<h5>There is component1</h5>
			</div>
			)
	}
})

var Component2 = React.createClass({
	render:function(){
		return (
			<div>
				<h5>There is component2</h5>
			</div>
			)
	}
})

ReactDOM.render(<Component/>,document.getElementById('example'));