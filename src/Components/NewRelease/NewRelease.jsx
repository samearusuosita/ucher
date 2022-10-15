import React, {useRef} from 'react';

import "./NewRelease.scss";
import {BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'

import YouTube from 'react-youtube';


const NewRelease = () => {


    const scrollRef = useRef(null);
  
    const scroll = (direction) => {
      const {current} = scrollRef;
  
      if (direction === 'Left'){
        current.scrollLeft -= 300;
      }else{
        current.scrollLeft += 300; 
      }
    }


  const NewRelease = [
    {YouTubevideoId: "zMyq7OaC2o4"},
    {YouTubevideoId: "0QUc0IMdatE"},
    {YouTubevideoId: "EaJ_FptH1cI"},
    {YouTubevideoId: "qI9ssWaA7ug"},
    {YouTubevideoId: "t4deXKE15HY"},     
  ]

// // assume only one video is playing at a time
// var videoPlaying = null;

// const onPlay = function() {
//   if (videoPlaying && videoPlaying !== this) {
//     videoPlaying.pause()
//   }
//   videoPlaying = this
// }

// // init event handler
// const videos = document.getElementsByClassName("video-bg")
// for (let i = 0; i < videos.length; i++) {
//   videos[i].addEventListener("play", onPlay)
// } 


  return (
    <div className='app_NewRelease'>
      <div className="title-newrelease">
        <h1 className='NewRelease-title'>New Release</h1>  
        <p className='newRelease-p-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      
        <div className="app__gallery-video">
          <div className="app__gallery-video_container" ref={scrollRef}>
            {NewRelease.map((NewRelease, index) =>(
              <div className="app__gallery-video_card flex__center" key={index+1} id={index}>
                <YouTube videoId={NewRelease.YouTubevideoId} className="video-bg"/>          
              </div>
            ))}
          </div>
        </div>

        <div className="app__gallery-video_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('Left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('Right')}/>
        </div>
        <div className="app__more">
        <button className='btn-viewMore'>Go to my channel</button>
        </div>
      </div>

    </div>
  )
}

export default NewRelease
