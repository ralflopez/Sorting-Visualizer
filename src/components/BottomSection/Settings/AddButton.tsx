import React from 'react'
import { Plus } from 'react-bootstrap-icons'
import styled from 'styled-components'

const Button = styled.button`
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

const AddButton = () => {
    return (
        <Button>
            Add
        </Button>
    )
}

export default AddButton
