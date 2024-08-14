import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useContext } from "react";
import { TransactionContext } from "../../contexts/TransactionsContext";

export function Summary() {

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

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Incomings</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>
                    £ {summary.income}
                </strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Outgoings</span>
                    <ArrowCircleDown size={32} color="#f75a68" /> 
                </header>
                <strong>
                    £ {summary.outgoing}
                </strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Balance</span>
                    <CurrencyDollar size={32} color="#fff"/> 
                </header>
                <strong>£ {summary.balance}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}