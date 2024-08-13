import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logo from "../../assets/budget-mate-logo.svg"

export function Header() {
    return (
        <HeaderContainer>

            <HeaderContent>
                <span><img src={logo} alt=""/><strong>Budget Mate</strong></span>
                <NewTransactionButton>New Transaction</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}