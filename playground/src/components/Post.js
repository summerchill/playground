import React from 'react'
import ReactDOM from 'react-dom'

class Post extends React.Component 
    {    
        render() {
            return (
                <div>
                    <img className='post-image'></img>
                    <h3 className='post-title' >{this.props.title}</h3>
                    <p className='post-text'>{this.props.text}</p>
                </div>
            )
    }
}

export default Post