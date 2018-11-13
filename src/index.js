import React from 'react';
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';	

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const GOOGLE_API_KEY = "AIzaSyCEpURqLoJrjo3vCEemDFDXv1e5d3QH2Ks";

class App extends React.Component {
	constructor(props){
		super(props);
		
		this.state = {
			videos: [],
			selectedVideo: null
		}

		this.videoSearch('gigahertz');
	}

	videoSearch = term => {
		YTSearch({ key: GOOGLE_API_KEY, term: term }, videos => {
			this.setState({ videos });
		})
	};

	render(){
		return <div>
			<SearchBar videoSearchChange={term => this.videoSearch(term)} />
			<VideoDetail video={this.state.selectedVideo || this.state.videos[0]}/>
			<VideoList videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
		</div>
	}
}

ReactDOM.render(<App />, document.querySelector(".container"));