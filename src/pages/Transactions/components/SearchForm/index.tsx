import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { TransactionContext } from '../../../../contexts/TransactionsContext'
import { useContextSelector } from 'use-context-selector'
import { memo } from 'react'

const searchFormSchema = zod.object({ query: zod.string() })

type SearchFormInputs = zod.infer<typeof searchFormSchema>

function SearchFormComponent() {
  const fetchTransactions = useContextSelector(TransactionContext, context => context.fetchTransactions)

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>(
    {
      resolver: zodResolver(searchFormSchema),
    },
  )

  async function handleSearchTransactions(data: SearchFormInputs) {
    // this just simulate a response delay
    await fetchTransactions(data.query)

    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Search by transaction"
        {...register('query')}
      />
      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}

export const SearchForm = memo(SearchFormComponent)
