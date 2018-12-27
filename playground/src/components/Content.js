import React from 'react'
import ReactDOM from 'react-dom'
import Post from './Post'

class Content extends React.Component 
{
    render() {
        return (
            <content>
                <Post />
                <Post />
                <Post />
                <Post />                
            </content>
        )
    }
}

export default Content