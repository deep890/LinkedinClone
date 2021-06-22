import React from 'react'
import './Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
   
        const newsArticle = (heading, subtitle) => {
        <div className = "Widgets__article">
            <div className = "Widgets_article_left">
                <FiberManualRecordIcon/>
            </div>
            <div className = "Widgets_article_right">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        }
    
    return (
        <div className = "widgets">
            <div className = "Widgets__header">
                <h2>Linkedln news</h2>
                <InfoIcon/>
            </div>
            {newsArticle('hello')}
            
        </div>
    )
}

export default Widgets
