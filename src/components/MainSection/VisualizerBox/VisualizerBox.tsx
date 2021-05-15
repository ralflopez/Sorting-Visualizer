import React from 'react'
import DataBlock from './DataBlock'
import { Box } from './VisualizerBox.styled'

const VisualizerBox = () => {
    return (
        <Box>
            <DataBlock 
                value={100}
                color="dark"
                height={100}
            />
            <DataBlock 
                value={50}
                color="dark"
                height={50}
            />
            <DataBlock 
                value={10}
                color="dark"
                height={10}
            />
            <DataBlock 
                value={1}
                color="dark"
                height={1}
            />
            <DataBlock 
                value={0}
                color="dark"
                height={0}
            />
            <DataBlock 
                value={75}
                color="dark"
                height={75}
            />
        </Box>
    )
}

export default VisualizerBox
