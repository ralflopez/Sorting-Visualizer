import styled from 'styled-components'

interface TBlock {
    color: string
    height: number
}

export const Block = styled.div<TBlock>`
    width: 40px;
    height: ${({height}: any) =>  {
        const full = `${height + '%'} - 1rem`
        const multiplier = `${height} / 100`
        const addend = `calc(${full} * ${multiplier})`
        return `calc(${addend} + 1rem)`
    }};
    background-color: ${(props: any) => props.theme.palette[props.color].color};
    color: ${(props: any) => props.theme.palette[props.color].text};
    text-align: center;
    padding-top: 0.5rem;
    margin: 0 1px;
    border-top-left-radius: 0.7rem;
    border-top-right-radius: 0.7rem;
    box-sizing: content-box;
`