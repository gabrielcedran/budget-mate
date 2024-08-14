import { createContext, PropsWithChildren, useEffect, useState } from "react";

export interface Transaction {
    id: number
    description: string
    type: 'income' | 'outgoing'
    price: number
    category: string
    createdAt: Date
}


interface TransactionContextType {
    transactions: Transaction[]
    fetchTransactions: (query?: string) => Promise<void>
}

export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType)

export function TransactionsProvider({children}: PropsWithChildren) {
    const [transactions, setTransactions] = useState<Transaction[]>([])
    
    async function fetchTransactions(query?: string) {

        const url = new URL('http://localhost:3000/transactions')
        
        if (query) {
            url.searchParams.append('q', query)
        }
        
        const response = await fetch(url)
        const data = await response.json()
        setTransactions([...data.map(transaction => ({...transaction, createdAt: new Date(transaction.createdAt)}))])
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
        <TransactionContext.Provider value={{transactions, fetchTransactions}}>
            {children}
        </TransactionContext.Provider>
    )
}