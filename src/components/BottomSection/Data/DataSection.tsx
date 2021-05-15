import React from 'react'
import styled from 'styled-components'
import { X } from 'react-bootstrap-icons'
import { DataS, DarkerContainer } from './DataSection.styled'

const DataCard = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.1rem 0.8rem;
    background-color: ${({theme}: any) => theme.palette.dark.color};
    color: ${({theme}: any) => theme.palette.dark.text};
    border-radius: ${({theme}: any) => theme.sizing.rounded.sm};
    margin-bottom: 0.8rem;
    & > svg {
        border-radius: 50%;
        transition: ${({theme}: any) => theme.transition.basic};
        cursor: pointer;
        &:hover {
            background-color: ${({theme}: any) => theme.palette.secondary.color};
        }
    }
`

const DataSection = ({children}: any) => {
    const inputs: any = React.Children.map(children, (child: any) => child.type.name === 'Input' ? child : null)
    return (
        <DataS>
            <DarkerContainer>
                <h3>Data</h3>
                {inputs}
                <DataCard>
                    <p>{25}</p>
                    <X size={25}/>
                </DataCard>
                <DataCard>
                    <p>{25}</p>
                    <X size={25}/>
                </DataCard>
                <DataCard>
                    <p>{25}</p>
                    <X size={25}/>
                </DataCard>
                <DataCard>
                    <p>{25}</p>
                    <X size={25}/>
                </DataCard>
            </DarkerContainer>
        </DataS>
    )
}

const Input = ({children}: any) => {
    return (
        <DataCard>
            <p>{children}</p>
            <X size={25}/>
        </DataCard>
    )
}
DataSection.Input = Input

export default DataSection
