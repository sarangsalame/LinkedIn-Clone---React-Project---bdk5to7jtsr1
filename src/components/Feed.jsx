import React,{useState} from "react";
import "../styles/feed.css";
import { Avatar } from "@material-ui/core";
import PhotoIcon from "@material-ui/icons/Photo";
import YoutubeIcon from "@material-ui/icons/Youtube";

import CalendarToday from "@material-ui/icons/CalendarToday";
import Assignment from "@material-ui/icons/Assignment";
import Post from "./Post";


const Feed = ({userdata}) => {
  const [post, setPost]=useState([])
  const [input, setInput]=useState("")
  const submitPost=(e)=>{
      e.preventDefault();
      let dateobj = new Date();
      let date = {
        hour:dateobj.getHours(),
        minutes:dateobj.getMinutes(),
        second:dateobj.getSeconds()
      }
      console.log(date)
      setPost([...post, {
        name:userdata.name,
        discription:"",
        message:input,
        photoUrl:userdata.photoUrl,
        timestamp:date
      }])
      
      setInput('')
      
  }

  return (
    <div className='feed'>
      <div className='feed__input'>
        <div className="feed__input_search">
        <Avatar src={userdata.photoUrl}/>
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
      {
        post.map((element, index)=>{
          return (
            <Post key={index} name={element.name} discription={element.discription} message={element.message} photoUrl={element.photoUrl}/>
          )
        })
        
      }
    </div>
  );
};

export default Feed;
