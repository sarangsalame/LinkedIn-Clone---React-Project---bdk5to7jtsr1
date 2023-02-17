import React from 'react'
import {Avatar} from '@material-ui/core'
import MoreVert from '@material-ui/icons/MoreVert'
import ThumbUp from '@material-ui/icons/ThumbUp'
import Comment from '@material-ui/icons/Comment'
import Share from '@material-ui/icons/Share'
import Send from '@material-ui/icons/Send'
import '../styles/post.css'
const Post = ({name, discription, message, photoUrl}) => {
  return (
    <div className='posts'>
        <div className='post__header'>
            <div className='post__headerLeft'>
            <Avatar src={photoUrl}/>
                <div className='post_profile_details'>
                <h3>{name}</h3>
                <p>{discription}</p>
                </div>
            </div>

            <div className='post__headerRight'>
                <MoreVert/>
            </div>
            </div>
            <div className='post__body'>
                <p>{message}</p>
            </div>
            <div className='post__footer'>
                <div className='post__footer__option'>
                    <ThumbUp/>
                    <span>Like</span>
                </div>
                <div className='post__footer__option'>
                    <Comment/>
                    <span>Comment</span>
                </div>
                <div className='post__footer__option'>
                    <Share/>
                    <span>Share</span>
                </div>
                <div className='post__footer__option'>
                    <Send/>
                    <span>Send</span>
                </div>
            </div>
    </div>
  )
}

export default Post