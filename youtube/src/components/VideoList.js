import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const parsedVideos = videos.map(video => (
    <VideoItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />
  ));
  return <div className="ui relaxed divided list">{parsedVideos}</div>;
};

export default VideoList;
