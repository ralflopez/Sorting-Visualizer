import styled, { StyledComponent } from "styled-components"

export const Controls: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 300ms ease-out;
    position: relative;
    margin-right: 2px;
    &:hover {
        opacity: 0.5;
    }
`