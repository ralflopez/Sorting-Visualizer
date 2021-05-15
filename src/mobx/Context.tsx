import React, { createContext, useContext } from 'react'
import { SortStore, myStore } from './Store'

const StoreContext = createContext<SortStore>((null as any))

const StoreProvider = ({ children }: any) => {
    return (
        <StoreContext.Provider value={myStore}>
            { children }
        </StoreContext.Provider>
    )
}

export default StoreProvider

export const useSortStore = () => useContext(StoreContext)