import React from 'react'
import { PlayFill } from 'react-bootstrap-icons'
import { useSortStore } from '../../mobx/Context'
import { SortStore } from '../../mobx/Store'
import sort from '../../SortingMethods/Combined'
import { Controls } from './Controlls.styled'

const PlayControl = () => {
    const store: SortStore = useSortStore()

    const handleSort = () => {
        //@ts-ignore
        const sortFunction = sort[`${store.strategy}`]
        store.data.forEach((_, index) => {
            store.selectDataBlock(index, 'dark')
        })
        store.copyDataBlocks()
        sortFunction(store)
    }

    return (
        <Controls
            onClick={handleSort}
        >
            <PlayFill color="#87ED76" size={50}/>
        </Controls>
    )
}

export default PlayControl
