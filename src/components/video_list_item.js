import React from 'react';

const VideoListItem = (props) => {
	const { snippet } = props.data;
	return (
		<div style={styles.elem} onClick={() => props.onVideoSelect(props.data)}>
      <img src={snippet.thumbnails.default.url} alt="thumbnail" />
			<div style={styles.text}>
				<h3>{snippet.title}</h3>
				<p>{snippet.description}</p>
			</div>
		</div>
	);
}

const styles = {
  elem: {
    display: "flex",
    border: "1px solid gray",
    margin: "10px",
    padding: "10px",
    borderRadius: "5px"
  },
  text: {
    margin: "0 10px"
  }
};

export default VideoListItem;