import React, { Component } from 'react';
import VideoListItem from './video_list_item';


// class VideoList extends Component {
//
//     constructor(props) {
//         super(props);
//
//         let videoItems = props.videos.map((video) => {
//             return <VideoListItem key={video.etag} video={video} />;
//         });
//
//         console.log(videoItems);
//
//         this.state = { videoItems: videoItems };
//     }
//
//     render() {
//         return (
//             <div>
//                 { this.props.videos.length } Videos Found:
//                 <ul className="col-md-4 list-group">
//                     { this.state.videoItems }
//                 </ul>
//             </div>
//         );
//     }
// }



const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={ props.onVideoSelect }
            key={ video.etag }
            video={video}
        />
    });

    return (
        <div>
            <ul className="col-md-4 list-group">
                { videoItems }
            </ul>
        </div>
    )
};


export default VideoList;

