import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { priceFormatter } from "../../utils/formatter";
import { useSummary } from "../../hooks/useSummary";

export function Summary() {

    const summary = useSummary()

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Incomings</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>
                    {priceFormatter.format(summary.income)}
                </strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Outgoings</span>
                    <ArrowCircleDown size={32} color="#f75a68" /> 
                </header>
                <strong>
                    {priceFormatter.format(summary.outgoing)}
                </strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Balance</span>
                    <CurrencyDollar size={32} color="#fff"/> 
                </header>
                <strong>{priceFormatter.format(summary.balance)}</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}