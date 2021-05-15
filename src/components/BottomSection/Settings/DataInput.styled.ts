import styled from 'styled-components'

export const Input = styled.input<{type?: string}>`
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

export const Flex = styled.div`
    display: flex;
`

export const Button = styled.button`
    padding: 0.7rem 0.8rem;
    border-radius: 0.6rem;
    border: 0;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    background-color: ${({theme}: any) => theme.palette.primary.color};
    color: ${({theme}: any) => theme.palette.primary.text};
    cursor: pointer;
    transition: all 300ms ease-out;
    position: relative;
    &:hover {
        opacity: 0.85
    }
`