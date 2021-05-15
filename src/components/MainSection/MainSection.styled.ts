import styled from 'styled-components'

export const Main = styled.div`
    flex: 1;
    max-height: 50%;
    overflow: auto;
    background-color: ${({theme}: any) => theme.palette.background.color}
    & > div {
        height: 100%;
    }
`