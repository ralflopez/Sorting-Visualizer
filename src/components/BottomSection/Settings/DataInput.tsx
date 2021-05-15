import React from 'react'
import styled from 'styled-components'

const Input = styled.input<{type?: string}>`
    background-color: ${({theme}: any) => theme.palette.dark['100']};
    color: ${({theme}: any) => theme.palette.dark.text};
    border: 0;
    border-radius: 0.6rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    outline: none;
    padding: 0.5rem 0.6rem;
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    &[type=number] {
        -moz-appearance: textfield;
    }
`

const DataInput = () => {
    return (
        <Input type="number"/>
    )
}

export default DataInput
