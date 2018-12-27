import React from 'react'
import ReactDOM from 'react-dom'
import Post from './Post'

class Body extends React.Component 
{
    render() {
        return (
            <div>
                <Post />
                <Post />
                <Post />
                <Post />                
            </div>
        )
    }
}

export default Body