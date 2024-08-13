import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
    return (
        <div>
            <Header />
            <Summary />
            <TransactionsContainer>
                <TransactionsTable>
                    <tbody>
                        <tr>
                            <td width="50%">Website development</td>
                            <td><PriceHighlight variant="incoming">£ 5,000.00</PriceHighlight></td>
                            <td>Income</td>
                            <td>12/08/2024</td>
                        </tr>
                        <tr>
                            <td width="50%">Dinner</td>
                            <td><PriceHighlight variant="outgoing">- £ 10.00</PriceHighlight></td>
                            <td>Outgoing</td>
                            <td>12/08/2024</td>
                        </tr>
                    </tbody>
                </TransactionsTable>      
            </TransactionsContainer>  
        </div>
    )
}