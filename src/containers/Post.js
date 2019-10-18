import React from 'react'

const post = (props) => {
    return (
        <article>
            <h1>{props.title}</h1>
            <div className="Info">
                <div className="Body">{props.body}</div>
                <div className="Author">{props.author ? props.author : "Author"}</div>
            </div>
        </article>
    )
}

export default post