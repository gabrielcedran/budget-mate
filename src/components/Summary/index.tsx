import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";

export function Summary() {
    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Incomings</span>
                    <ArrowCircleUp size={32} color="#00b37e"/>
                </header>
                <strong>£ 3,000.00</strong>
            </SummaryCard>

            <SummaryCard>
                <header>
                    <span>Outgoings</span>
                    <ArrowCircleDown size={32} color="#f75a68" /> 
                </header>
                <strong>£ 3,000.00</strong>
            </SummaryCard>

            <SummaryCard variant="green">
                <header>
                    <span>Balance</span>
                    <CurrencyDollar size={32} color="#fff"/> 
                </header>
                <strong>£ 3,000.00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}