import React from "react";
import "./VideoItem.css";

class VideoItem extends React.Component {
  render() {
    return (
      <div
        className="video-item item"
        onClick={() => this.props.onVideoSelect(this.props.video)}
      >
        <img
          className="ui image"
          alt={this.props.video.snippet.title}
          src={this.props.video.snippet.thumbnails.high.url}
        />
        <div className="content">
          <div className="header">{this.props.video.snippet.title}</div>
        </div>
      </div>
    );
  }
}

export default VideoItem;
