import { TransactionContext } from '../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'

export function useSummary() {
  const transactions = useContextSelector(TransactionContext, context => context.transactions)

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'income') {
      acc.income += transaction.price
      acc.balance += transaction.price
    } else {
      acc.outgoing += transaction.price
      acc.balance -= transaction.price
    }
    return acc
  }, { income: 0, outgoing: 0, balance: 0 })

  return summary
}
