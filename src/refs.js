var Form = React.createClass({
	getInitialState:function() {
	    return {
	        userName:'',
	        sex:'man',
	        profession:'前端开发工程师'
	    };
	},
	submitEvent:function(e){
		e.preventDefault();
	    var data ={
	    	userName : this.refs.userName.value,
	    	sex : this.state.sex,
	    	profession : this.state.profession,

	    }
	    this.refs.selectP.doSomething();
	    console.log(data)
	    console.log(this.refs.selectP.refs.selectp)
	},
	radioClick:function(e){
		this.setState({
			sex:e.target.value
		})
	},
	selectEvent:function(e){
		console.log(e.target);
		this.setState({
			profession:e.target.value
		})
	},
	render:function(){
		return (
				<form>
					<p>用户名</p>
					<input type="text" name="username" ref="userName" value={this.state.username}/>

					<p>性别</p>
					<label htmlFor="man">man</label>
					<input type="radio" name="sex" id="man" onClick={this.radioClick} value="man" defaultChecked/>
					<label htmlFor="women">women</label>
					<input type="radio" name="sex" id="women" onClick={this.radioClick} value="women"/>

					<p>职业</p>
					<SelectComponent selectEvent={this.selectEvent} ref="selectP" keyword="hey"/>
					<p></p>
					<input type="submit" value="submit" onClick ={ this.submitEvent}/>
				</form>
			)
	}
})
var SelectComponent = React.createClass({
	doSomething:function(){
		console.log(this.props.keyword);
	},
	render:function(){
		return (
			<select defaultValue="前端工程师" onChange = {this.props.selectEvent} ref="selectp">
				<option value="前端工程师">前端工程师</option>
				<option value="php开发工程师">php开发工程师</option>
			</select>
			)
	}
});

ReactDOM.render(<Form />,document.getElementById('example'))