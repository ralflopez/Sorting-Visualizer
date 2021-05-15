import styled from 'styled-components'

interface TColor {
    color?: string
}

interface TSelection {
    color?: string,
    selectionPosition: string
}

export const DropdownParent = styled.div`
    display: inline-block;
    position: relative;
`

export const DropdownButton = styled.div<TColor>`
    background-color: ${(props: any) => props.color ? (props.theme.palette[props.color].color) : props.theme.palette.primary.color};
    color: ${(props: any) => props.color ? (props.theme.palette[props.color].text) : props.theme.palette.primary.text};
    padding: ${({theme}: any) => theme.sizing.padding.button};
    border-radius: ${({theme}: any) => theme.sizing.rounded.sm};
    font-size: 0.9rem;
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    transition: all 300ms ease-out;
    position: relative;
    &:hover {
        opacity: 0.85
    }
    & > svg {
        position: relative;
        margin-left: 4px;
        top: 1px;
    }
`

export const DropdownSelection = styled.div<TSelection>`
    background-color: ${(props: any) => props.color ? (props.theme.palette[props.color].color) : props.theme.palette.primary.color};
    color: ${(props: any) => props.color ? (props.theme.palette[props.color].text) : props.theme.palette.primary.text};
    position: absolute;
    top: ${({selectionPosition}: any) => selectionPosition === 'bottom' ? 'calc(100% + 7px)' : 'calc(-300%)'};
    right: 0;
    min-width: 100%;
    overflow: auto;
    border-radius: ${({theme}: any) => theme.sizing.rounded.sm};
    padding: 0.5rem;
    text-align: center;
`

export const DropdownItem = styled.div`
    padding: 0.4rem;
    border-radius: ${({theme}: any) => theme.sizing.rounded.sm};
    cursor: pointer;
    transition: all 300ms ease-out;
    &:hover {
        opacity: 0.5;
    }
`