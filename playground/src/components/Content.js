import React from 'react'
import ReactDOM from 'react-dom'
import Transaction from './Transaction'
import transactionData from './transactionData'

class Content extends React.Component 
{
    constructor() {
        super()
        this.state = {
            transactions: transactionData
        }
    }

    render() {
        const transactions = this.state.transactions.map(transaction => <Transaction key={transaction.id} amount={transaction.amount} desc={transaction.desc}/>)

        return (
            <content>
                {transactions}
            </content>
        )
    }
}

export default Content