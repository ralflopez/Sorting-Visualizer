import React from 'react'
import DataBlock from './DataBlock'
import { Box } from './VisualizerBox.styled'
import { SortStore, TDataBlock } from '../../../mobx/Store'
import { useSortStore } from '../../../mobx/Context'
import { observer } from 'mobx-react-lite'

const VisualizerBox = () => {
    const store: SortStore = useSortStore()
    
    return (
        <Box>
            {
                store.data.map((item: TDataBlock) => (
                    <DataBlock 
                        key={item.id}
                        value={item.value}
                        color={item.color}
                        height={(item.height as number)}
                    />
                ))
            }
        </Box>
    )
}

export default observer(VisualizerBox)
