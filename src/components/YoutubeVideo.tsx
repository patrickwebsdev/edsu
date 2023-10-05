'use client';
import React from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';

const YoutubeVideo = () => {
	const onPlayerReady: YouTubeProps['onReady'] = (event) => {
		event.target.pauseVideo();
	};

	const opts: YouTubeProps['opts'] = {};

	return <YouTube videoId='osr2xaOsbSM' opts={opts} onReady={onPlayerReady} />;
};
export default YoutubeVideo;
