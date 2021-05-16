import { observer } from 'mobx-react-lite'
import React from 'react'
import { PlayFill } from 'react-bootstrap-icons'
import { useSortStore } from '../../mobx/Context'
import { SortStore } from '../../mobx/Store'
import sort from '../../SortingMethods/Combined'
import { Controls } from './Controlls.styled'
import { handleAfterPlayingReset } from './resetHandler'

const PlayControl = () => {
    const store: SortStore = useSortStore()

    const handleSort = async () => {
        if(store.isExecuting) return
        //@ts-ignore
        const sortFunction = sort[`${store.strategy}`]
        store.data.forEach((_, index) => {
            store.selectDataBlock(index, 'dark')
        })
        store.copyDataBlocks()
        store.setIsExecuting(true)
        await sortFunction(store)
        handleAfterPlayingReset(store)
    }

    return (
        <Controls
            onClick={handleSort}
        >
            <PlayFill color="#87ED76" size={50}/>
        </Controls>
    )
}

export default observer(PlayControl)
