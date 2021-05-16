import styled, { StyledComponent } from 'styled-components'

export const Main: StyledComponent<"div", any, {}, never> = styled.div`
    flex: 1;
    max-height: 50%;
    overflow: auto;
    background-color: ${({theme}: any) => theme.palette.background.color};
    & > div {
        height: 100%;
    }
`