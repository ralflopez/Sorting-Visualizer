import React from 'react'
import styled from 'styled-components'
import { X } from 'react-bootstrap-icons'
import { DataS, DarkerContainer, DataCard } from './DataSection.styled'
import { useSortStore } from '../../../mobx/Context'
import { TDataBlock } from '../../../mobx/Store'
import { observer } from 'mobx-react-lite'



const DataSection = () => {
    const store = useSortStore()

    const handleRemove = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
        const delId: string = (e.currentTarget.getAttribute('id') as string)
        store.removeData(delId)
    }
    
    return (
        <DataS>
            <DarkerContainer>
                <h3>Data</h3>
                {
                    store.data.map((data: TDataBlock) => (
                        <DataCard key={data.id}>
                            <p>{data.value}</p>
                            <X 
                                size={25}
                                id={data.id}
                                onClick={handleRemove}
                            />
                        </DataCard>
                    ))
                }
            </DarkerContainer>
        </DataS>
    )
}

export default observer(DataSection)
