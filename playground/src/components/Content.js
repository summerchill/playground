import React from 'react'
import ReactDOM from 'react-dom'
import Post from './Post'
import postsData from './PostsData'

class Content extends React.Component 
{
    constructor() {
        super()
        this.state = {
            posts: postsData
        }
    }

    render() {
        const postsComponents = this.state.posts.map(post => <Post key={post.id} title={post.title} text={post.text}/>)

        return (
            <div>
                {postsComponents}

            </div>
        )
    }
}

export default Content