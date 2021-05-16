import styled, { StyledComponent } from 'styled-components'

export const Section: StyledComponent<"div", any, {}, never> = styled.div`
    background-color: ${({theme}: any) => theme.palette.dark.color};
    color: ${({theme}: any) => theme.palette.dark.text};
    width: 100%;
    flex: 1;
    max-height: 50%;
    overflow: auto;
`

export const Layout: StyledComponent<"div", any, {}, never> = styled.div`
    display: flex;
    height: 100%;
    box-sizing: border-box;
    & > div {
        flex: 1;
        padding: 1rem;
    }
    & > div:nth-of-type(3) {
        flex: 3;
    }
`