import React from 'react'
import ReactDOM from 'react-dom'

class Transaction extends React.Component 
    {    
        render() {
            return (
                <div>
                    ${this.props.amount} - {this.props.desc}
                </div>
            )
    }
}

export default Transaction