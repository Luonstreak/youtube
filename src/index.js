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
		return <div style={styles.container}>
			<SearchBar style={styles.searchBar} videoSearchChange={term => this.videoSearch(term)} />
			<VideoDetail style={styles.videoDetail} video={this.state.selectedVideo}/>
			<VideoList style={styles.videoList} videos={this.state.videos} onVideoSelect={selectedVideo => this.setState({selectedVideo})}/>
		</div>
	}
}

const styles = {
  container: {
    alignItems: "center",
  },
  searchBar: {
  },
  videoDetail: {

  },
  videoList: {

  }
}

ReactDOM.render(<App />, document.querySelector(".container"));

