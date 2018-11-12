import React from "react";

const VideoList = (props) => {
	return <div>
		<ul>
		{props.videos.map(el => {return <li key={el.etag}>{el.snippet.title}</li>})}
		</ul>
	</div>
}

export default VideoList;