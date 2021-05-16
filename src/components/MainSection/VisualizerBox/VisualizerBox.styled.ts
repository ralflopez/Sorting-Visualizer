import styled, { StyledComponent } from 'styled-components'

export const Box: StyledComponent<"div", any, {}, never> = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-top: 1rem;
    box-sizing: border-box;
    overflow: hidden;
`