import React from 'react'
import axios from 'axios'
import shortid from 'shortid'

import Post from './Post'


const INITIAL_STATE = {
    errorMessage: "",
    posts: [],   
}


class AjaxTestingClass extends React.Component {

    state = INITIAL_STATE

    async componentDidMount() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            const posts = response.data.slice(0, 4)
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: "PJC",
                }
            })
            this.setState({posts: updatedPosts})
        } catch(error) {
            console.error(error)
        }
    }

    render() {
        let {errorMessage, posts} = this.state
        
        return (
            <div>
                {errorMessage && <p>{errorMessage}</p>}
                {posts && posts.map(post => {
                    let id = shortid.generate()
                    {console.log(id)}
                    return (
                        <Post title={post.title} key={id} body={post.body}/>
                    )
                })}
            </div>
        )
    }
}

export default AjaxTestingClass