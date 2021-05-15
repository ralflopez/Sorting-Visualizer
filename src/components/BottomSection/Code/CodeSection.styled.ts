import styled from 'styled-components'
import theme from '../../../theme'

export const DarkerContainer = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    background-color: ${({theme}: any) => theme.palette.dark['100']};
    padding: 1.5rem;
`

export const TextArea = styled.div`
    background-color: ${({theme}: any) => theme.palette.dark['100']};
    color: ${({theme}: any) => theme.palette.dark.text};
    width: 100%;
    height: 100%;
    outline: none;
    border: 0;
    resize: none;
    overflow: auto;
    & p {
        margin: 0;
        padding: 0.2rem 0;
    }
    font-size: 0.9rem;
    font-family: monospace;
    &::-webkit-scrollbar {
        width: 5px;
    }
`

export const Highlighted = styled.p`
    background-color: ${({theme}: any) => theme.palette.primary.color};
`