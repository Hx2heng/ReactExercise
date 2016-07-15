//通过引入React.addons.LinkedStateMixin 实现双向数据绑定
var Comp= React.createClass({
	mixins: [ React.addons.LinkedStateMixin ],
	getInitialState:function(){
		return {
			message:''
		}
	},
	render:function(){
		return (
			<div>
				<p>{this.state.message}</p>
				<input type="text" valueLink={this.linkState('message')} />
			</div>
			)
	}
})
//自制addon
var newAddon = {
	showSelf:function(){
		console.log(this)
	}
}
var Comp2 = React.createClass({
	mixins: [ newAddon ],
	getInitialState:function(){
		return {
			message:''
		}
	},
	render:function(){
		return (
			<div>
				<button onClick={this.showSelf}>hello</button>
				<Comp3/>
			</div>
			)
	}
})
var Comp3 = React.createClass({
	mixins: [ newAddon ],
	render:function(){
		return (
			<div>
				<button onClick={this.showSelf}>hello2</button>
			</div>
			)
	}
})
ReactDOM.render(<Comp />,document.getElementById('example'))
ReactDOM.render(<Comp2 />,document.getElementById('example2'))