import React from 'react'
import { ArrowCounterclockwise } from 'react-bootstrap-icons'
import { useSortStore } from '../../mobx/Context'
import { SortStore } from '../../mobx/Store'
import { Controls } from './Controlls.styled'
import { handleReset } from './resetHandler'

const RepeatControl = () => {
    const store: SortStore = useSortStore()

    const handleResetAction = () => {
        handleReset(store)
    }

    return (
        <Controls
            onClick={handleResetAction}
        >
            <ArrowCounterclockwise color="#272727" size={30} />
        </Controls>
    )
}

export default RepeatControl
