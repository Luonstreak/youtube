import React from 'react';

class SearchBar extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			input: '',
			submit: false
		}
		this.handleInput = this.handleInput.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleInput(e){
		this.setState({ input: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.videoSearchChange(this.state.input);
	}

	render(){
		return <div>
			<input type="text" onChange={this.handleInput} value={this.state.input} />
			<button onClick={this.handleSubmit}>Search</button>
		</div>
	}
}

export default SearchBar;