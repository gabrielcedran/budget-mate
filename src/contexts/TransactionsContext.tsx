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
}

export const TransactionContext = createContext<TransactionContextType>({} as TransactionContextType)

export function TransactionsProvider({children}: PropsWithChildren) {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        async function loadTransactions() {
            const response = await fetch('http://localhost:3000/transactions')
            const data = await response.json()
            setTransactions([...data.map(transaction => ({...transaction, createdAt: new Date(transaction.createdAt)}))])
        }
        loadTransactions()
        // fetch('http://localhost:3000/transactions')
        // .then(response => response.json())
        // .then(response => {
        //     console.log(response)
        // })

    }, [])

    return (
        <TransactionContext.Provider value={{transactions}}>
            {children}
        </TransactionContext.Provider>
    )
}