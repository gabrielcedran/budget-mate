import * as Dialog from '@radix-ui/react-dialog'
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newTransactionFormSchema = zod.object({
    description: zod.string(),
    price: zod.number(),
    category: zod.string(),
    // type: zod.enum(['income', 'outgoing'])
})

type NewTransactionFormInputs = zod.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {
    const {register,  handleSubmit, formState: {isSubmitting} } = useForm<NewTransactionFormInputs>({
        resolver: zodResolver(newTransactionFormSchema),
    })
    
    async function handleCreateNewTransaction(data: NewTransactionFormInputs) {

        await new Promise((resolve) => setTimeout(resolve, 2000))

        console.log(data)
    }

    return(
        <Dialog.Portal>
            <Overlay>
                <Content>
                    <Dialog.Title>New Transaction</Dialog.Title>
                    <CloseButton>
                        <X size={24}/>
                    </CloseButton>
                    <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                        <input type="text" placeholder="Description" required {...register('description')}/>
                        <input type="number" placeholder="Value" required {...register('price', {valueAsNumber: true})}/>
                        <input type="text" placeholder="Category" required  {...register('category')}/>
                        <TransactionType>
                            <TransactionTypeButton variant='income' value="income">
                                <ArrowCircleUp size={24}/> Income
                            </TransactionTypeButton>
                            <TransactionTypeButton variant='outgoing' value="outgoing">
                                <ArrowCircleDown size={24}/> Outgoing
                            </TransactionTypeButton>
                        </TransactionType>
                        
                        <button type="submit" disabled={isSubmitting}>Create</button>
                    </form>
                </Content>
            </Overlay>
        </Dialog.Portal>
    )
}