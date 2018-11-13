import React from "react";
import VideoListItem from './video_list_item';

const VideoList = (props) => {
	return <div>
		<ul>
		{props.videos.map(el => {
			return <VideoListItem 
				data={el}
				key={el.etag} 
				onVideoSelect={props.onVideoSelect}
			/>
		})}
		</ul>
	</div>
}

export default VideoList;