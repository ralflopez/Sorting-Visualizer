import styled, { StyledComponent } from 'styled-components'

export const DarkerContainer: StyledComponent<"div", any, {}, never> = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 1rem;
    background-color: ${({theme}: any) => theme.palette.dark['100']};
    padding: 1.5rem;
`

export const TextArea: StyledComponent<"div", any, {}, never> = styled.div`
    background-color: ${({theme}: any) => theme.palette.dark['100']};
    color: ${({theme}: any) => theme.palette.dark.text};
    width: 100%;
    height: 100%;
    outline: none;
    border: 0;
    resize: none;
    overflow: auto;
    transition: all 100ms ease-in-out;
    & p {
        margin: 0;
        padding: 0.2rem 0;
        transition: all 100ms ease-in-out;
    }
    font-size: 0.7rem;
    font-family: monospace;
    &::-webkit-scrollbar {
        width: 5px;
    }
`

export const Highlighted: StyledComponent<"p", any, {}, never> = styled.p`
    background-color: ${({theme}: any) => theme.palette.primary.color};
    transition: all 100ms ease-in-out;
`