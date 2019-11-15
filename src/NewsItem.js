import React from "react"

function NewsItem(props) {
    return (
        <div className="news">
            <a href="{props.url}" target="_blank">
                {props.title}
            </a>
        </div>
    )
}

export default NewsItem
