import React from 'react';

const VideoDetail = ({video}) => {

	if(!video){
		return <div>
        <h1>Search for a video</h1>
      </div>;
	}
	const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

	return <div>
		<div>
			<div className="embed-responsive embed-responsive-16by9">
				<iframe src={url} className="embed-responsive-item"></iframe>
			</div>
		</div>
		<div>
			<h2>{video.snippet.title}</h2>
			<p>{video.snippet.description}</p>
		</div>
	</div>
};

export default VideoDetail;