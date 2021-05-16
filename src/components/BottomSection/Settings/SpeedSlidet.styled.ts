import styled, { StyledComponent } from 'styled-components'

export const Slider: StyledComponent<"input", any, {}, never> = styled.input`
    -webkit-appearance: none;
    width: 100%;
    height: 1rem;
    border-radius: 1rem;
    background: ${({theme}: any) => theme.palette.dark['100']};
    outline: none;
    --webkit-transition: .2s;
    direction: rtl;
    &::-webkit-slider-thumb {
        --webkit-appearance: none;
        appearance: none;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        background: ${({theme}: any) => theme.palette.secondary.color};
        cursor: pointer;
    }
`

export const SecondaryText = styled.p`
    color: ${({theme}: any) => theme.palette.secondary.color};
    display: inline;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`