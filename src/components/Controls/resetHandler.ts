import { SortStore } from "../../mobx/Store"

export const handleReset = (store: SortStore) => {
    if(store.isExecuting) {
        store.setIsExecuting(false)
        store.setSpeed(-(store.speed))
    } else {
        // reset
        store.setActiveLines(-1, -1)
        store.data.forEach((_, index) => {
            store.selectDataBlock(index, 'dark')
        })
        store.revertDataBlocks()
    }
}

export const handleAfterPlayingReset = (store: SortStore) => {
    if(!store.isExecuting) {
        // reset
        store.setActiveLines(-1, -1)
        store.data.forEach((_, index) => {
            store.selectDataBlock(index, 'dark')
        })
        store.revertDataBlocks()
        store.setSpeed(-(store.speed))
    } else {
        store.setIsExecuting(false)
    }
}