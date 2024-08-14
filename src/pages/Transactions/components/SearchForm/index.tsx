import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const searchFormSchema = zod.object({query: zod.string()})

type SearchFormInputs = zod.infer<typeof searchFormSchema>

export function SearchForm() {

    const {register, handleSubmit, formState: {isSubmitting}} = useForm<SearchFormInputs>(
        {
            resolver: zodResolver(searchFormSchema)
        }
    )

    async function handleSearchTransactions(data: SearchFormInputs) {
        // this just simulate a response delay
        await new Promise((resolve) => setTimeout(resolve, 2000))
        
        console.log(data)
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input 
                type="text" 
                placeholder="Search by transaction"
                {...register("query")} 
            />
            <button type="submit" disabled={isSubmitting}>
                <MagnifyingGlass size={20} />
                Search
            </button>
        </SearchFormContainer>
    )
}