import styled from 'styled-components'

export const DataS = styled.div`
    overflow: hidden;
`

export const DarkerContainer = styled.div`
    height: 100%;
    max-height: 100%;
    width: 100%;
    border-radius: 1rem;
    background-color: ${({theme}: any) => theme.palette.dark['100']};
    color: ${({theme}: any) => theme.palette.dark.text};
    padding: 1rem;
    overflow: auto;
    
    & > h3 {
        margin: 0 0.5rem;
        margin-bottom: 0.8rem;
        letter-spacing: 0.1rem;
        font-weight: 400
    }
`