import styled, { StyledComponent } from 'styled-components'

interface TColor {
    color?: string
}

interface TSelection {
    color?: string,
    selectionPosition: string
}

export const DropdownParent: StyledComponent<"div", any, {}, never> = styled.div`
    display: inline-block;
    position: relative;
`

export const DropdownButton: StyledComponent<"div", any, TColor, never> = styled.div<TColor>`
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
    box-shadow: ${({theme}: any) => theme.palette.boxShadow.prop};
    &:hover {
        opacity: 0.85
    }
    & > svg {
        position: relative;
        margin-left: 4px;
        top: 1px;
    }
`

export const DropdownSelection: StyledComponent<"div", any, TSelection, never> = styled.div<TSelection>`
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
    box-shadow: ${({theme}: any) => theme.palette.boxShadow.prop};
`

export const DropdownItem: StyledComponent<"div", any, {}, never> = styled.div`
    padding: 0.4rem;
    border-radius: ${({theme}: any) => theme.sizing.rounded.sm};
    cursor: pointer;
    transition: all 300ms ease-out;
    &:hover {
        opacity: 0.5;
    }
`