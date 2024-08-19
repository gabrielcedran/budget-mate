import { PropsWithChildren, useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { createContext } from 'use-context-selector'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outgoing'
  price: number
  category: string
  createdAt: Date
}

export interface CreateTransaction {
  description: string
  type: 'income' | 'outgoing'
  price: number
  category: string
}

interface TransactionContextType {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransaction: (data: CreateTransaction) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType)

export function TransactionsProvider({ children }: PropsWithChildren) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  async function fetchTransactions(query?: string) {
    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
    const data = response.data
    setTransactions(
      [...data.map(transaction =>
        ({ ...transaction, createdAt: new Date(transaction.createdAt) }))])
  }

  async function createTransaction(data: CreateTransaction) {
    await new Promise((resolve) => setTimeout(resolve, 500))

    const { description, category, price, type } = data

    const response = await api.post<Transaction>('/transactions', {
      description, category, price, type, createdAt: new Date(),
    })

    setTransactions(state =>
      [
        {
          ...response.data,
          createdAt: new Date(response.data.createdAt),
        },
        ...state])
  }

  useEffect(() => {
    fetchTransactions()
    // fetch('http://localhost:3000/transactions')
    // .then(response => response.json())
    // .then(response => {
    //     console.log(response)
    // })
  }, [])

  return (
    <TransactionContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
