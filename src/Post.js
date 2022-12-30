import React from 'react'
import "./Post.css"
import { Avatar} from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import InputOption from './InputOption';
import ChatIcon from '@mui/icons-material/Chat';
import ShareIcon from '@mui/icons-material/Share';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Post({name, description, message,photoLink}) {/*These are your destructured props*/
  return (
    <div className="post">
        <div className="post_header">
        <Avatar className= 'post_avatar' src={photoLink} />
        <div className= "post_info">
            <h2>{name}</h2>
            <p>{description}</p>
        
            
        </div>
        </div>

        <div className = "post_body">
            <p>{message}</p>
        </div>
        <div className ="post_buttons">
            <InputOption Icon={ThumbUpOffAltIcon} title="like"
            color="gray"/>

            <InputOption Icon={ChatIcon} title="comment"
            color="gray"/>

            <InputOption Icon={ShareIcon} title="share"
            color="gray"/>

            <InputOption Icon={MailOutlineIcon} title="send"
            color="gray"/>
        </div>
    </div>
  )
}

export default Post