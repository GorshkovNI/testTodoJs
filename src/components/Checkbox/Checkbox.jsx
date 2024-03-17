import { Checkbox as ChakraCheckbox } from '@chakra-ui/react'
export const Checkbox = ({ id, className, state, label, onStateChange}) => {

    return(
        <>
            <ChakraCheckbox isChecked={state} size='lg' className={className} onChange={onStateChange}>{label}</ChakraCheckbox>
        </>
    )
}



