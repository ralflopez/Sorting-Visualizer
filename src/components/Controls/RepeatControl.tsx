import React from 'react'
import { ArrowCounterclockwise } from 'react-bootstrap-icons'
import { useSortStore } from '../../mobx/Context'
import { SortStore } from '../../mobx/Store'
import { Controls } from './Controlls.styled'

const RepeatControl = () => {
    const store: SortStore = useSortStore()

    const handleReset = () => {
        store.setActiveLines(-1, -1)
        store.data.forEach((_, index) => {
            store.selectDataBlock(index, 'dark')
        })
        store.revertDataBlocks()
    }

    return (
        <Controls
            onClick={handleReset}
        >
            <ArrowCounterclockwise color="#272727" size={30} />
        </Controls>
    )
}

export default RepeatControl
