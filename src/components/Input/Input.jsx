import {Button, Input as ChakraInput, InputGroup, InputRightElement} from '@chakra-ui/react'
export const Input = ({ className, value, onChange, onClear, isButton, onKeyPress, maxLength }) => {
    return(
        <>
            <InputGroup>
                <ChakraInput className={className} value={value} onChange={onChange} onKeyPress={onKeyPress} maxLength={maxLength} />
                <InputRightElement>
                    {isButton && <Button h='1.75rem' size='sm' onClick={onClear}>
                        X
                    </Button>}
                </InputRightElement>
            </InputGroup>
        </>
    )
}
