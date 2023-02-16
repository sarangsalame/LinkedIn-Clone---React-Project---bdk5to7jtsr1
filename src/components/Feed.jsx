import React,{useState} from "react";
import "../styles/feed.css";
import { Avatar } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import YoutubeIcon from "@material-ui/icons/Youtube";

import CalendarToday from "@material-ui/icons/CalendarToday";
import Assignment from "@material-ui/icons/Assignment";
import Post from "./Post";

const Feed = () => {

  const [input, setInput]=useState("")
  const submitPost=(e)=>{
      e.preventDefault();
      alert(input)
  }

  return (
    <div className='feed'>
      <div className='feed__input'>
        <div className="feed__input_search">
        <Avatar />
        <form onSubmit={submitPost}>
          <input type='text' placeholder='Start a post' onChange={(e)=>setInput(e.target.value)} />
          <input type='submit' />
        </form>
        </div>

        <div className='feed__options'>
          <div className='option'>
            <PhotoIcon style={{color:'#70b5f9'}} />
            <span>Photo</span>
          </div>
          <div className='option'>
            <YoutubeIcon style={{color:'#7fc15e'}}/>
            <span>Video</span>
          </div>
          <div className='option'>
            <CalendarToday style={{color:'#e7a33e'}}/>
            <span>Event</span>
          </div>
          <div className='option'>
            <Assignment style={{color:'#fc9295'}}/>
            <span>Write Article</span>
          </div>
        </div>
      </div>
      <Post name="Sarang" discription="this is some discription" message="this is some message" photoUrl ='https://www.socialnetworkelite.com/hs-fs/hubfs/image2-17.jpg?width=1200&name=image2-17.jpg'/>
    </div>
  );
};

export default Feed;
