import { useContext } from "react"
import { TransactionContext } from "../contexts/TransactionsContext"

export function useSummary() {
    
    const {transactions} = useContext(TransactionContext)

    const summary = transactions.reduce((acc, transaction) => {
        if (transaction.type === 'income') {
            acc.income += transaction.price
            acc.balance += transaction.price
        } else {
            acc.outgoing += transaction.price
            acc.balance -= transaction.price
        }
        return acc
    }, {income: 0, outgoing: 0, balance: 0})

    return summary
}