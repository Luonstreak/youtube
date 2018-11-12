import React from 'react';
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';	

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const GOOGLE_API_KEY = "AIzaSyCEpURqLoJrjo3vCEemDFDXv1e5d3QH2Ks";

class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			videos: [],
		}

		YTSearch({ key: GOOGLE_API_KEY, term: "circles" }, videos => {
			console.log(videos)
			this.setState({ videos });
		})

	}

	render(){
		return <div>
			<SearchBar />
			<VideoList videos={this.state.videos}/>
		</div>
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));