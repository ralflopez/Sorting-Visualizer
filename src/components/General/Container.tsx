import React from 'react'
import styled from 'styled-components'

const Div = styled.div`
    max-width: ${({theme}: any) => theme.sizing.width.maxWidth};
    margin: 0 auto;
    height: 100%;
    padding: 0 0.75rem;
`

const Container = ({ children }: any) => {
    return (
        <Div>
            {children}
        </Div>
    )
}

export default Container
