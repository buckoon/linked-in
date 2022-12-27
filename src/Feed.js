import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css'
import ImageIcon from '@mui/icons-material/Image';
import InputOption from "./InputOption";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';

export default function Feed() {
  return (
    <div className="feed">
        <div className="feed_inputContainer">
            <div className= "feed_input">
                <CreateIcon/>
                <form>
                    <input type="text"/>
                    <button type="submit">Send</button>

                </form>
            </div>
                <div className="feed_inputOptions">
                    <InputOption Icon={ImageIcon} title= "Photo"
                    color="#70B5F9"/>

                    <InputOption Icon={SubscriptionsIcon} title= "Video"
                    color="#70B5F9"/>

                    <InputOption Icon={EventNoteIcon} title= "Event"
                    color="#70B5F9"/>

                    <InputOption Icon={CalendarViewDayIcon} title= "Write Post"
                    color="#70B5F9"/>


                </div>
        </div>
        

    </div>
  )
}
