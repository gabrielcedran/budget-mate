import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export function NewTransactionModal() {
    return(
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Dialog.Title>New Transaction</Dialog.Title>
                    <CloseButton>
                        <X size={24}/>
                    </CloseButton>
                    <form>
                        <input type="text" placeholder="Description" required />
                        <input type="number" placeholder="Value" required />
                        <input type="text" placeholder="Category" required />
                        <TransactionType>
                            <TransactionTypeButton variant='income' value="income">
                                <ArrowCircleUp size={24}/> Income
                            </TransactionTypeButton>
                            <TransactionTypeButton variant='outgoing' value="outgoing">
                                <ArrowCircleDown size={24}/> Outgoing
                            </TransactionTypeButton>
                        </TransactionType>
                        
                        <button type="submit">Create</button>
                    </form>
                </Content>
            </Overlay>
        </Dialog.Portal>
    )
}