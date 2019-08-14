import React, {useState, useEffect} from 'react'
import axios from 'axios'

const AjaxTesting = props => {
    const [posts, setPosts] = useState([])
    const [ errorMessage, setErrorMessage ] = useState("")
    
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    })

    return (
        <div>
            {errorMessage && <p>{errorMessage}</p>}
            {posts.map(post => {
                return (
                    <div>
                        <h1>{post.title}</h1>
                        <div>
                            {post.body}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default AjaxTesting