import React from "react"

function NewsItem(props) {
  return (
    <div className="news">
      <li>
        <a href="{props.url}" target="_blank">
          {props.title}
        </a>
      </li>
    </div>
  )
}

export default NewsItem
