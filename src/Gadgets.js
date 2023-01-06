import React from 'react'
import "./Gadgets.css"
import NewspaperIcon from '@mui/icons-material/Newspaper';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Gadgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="gadgets_article">
            <div className="gadgets_articleLeft">
            <FiberManualRecordIcon/>
            </div>

            <div className="gadgets_articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>


        </div>

    )
  return (
    <div className="gadgets">
        <div className="gadgets_header">
            <h2>Latest News</h2>

            <NewspaperIcon/>


        </div>
        {newsArticle("Carl does it again!", "read all about it")}
        {newsArticle("Carl does it again!", "read all about it")}
        {newsArticle("Carl does it again!", "read all about it")}
        {newsArticle("Carl does it again!", "read all about it")}
    </div>
    
  )
}

export default Gadgets