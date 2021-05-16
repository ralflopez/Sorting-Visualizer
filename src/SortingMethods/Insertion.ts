import { SortStore } from "../mobx/Store";
import { setBreakpoint } from "./uiSync";

async function insertionSort(store: SortStore) {
    for(let i = 1; i < store.data.length; i++) {
        store.selectDataBlock(i, 'primary')
        await setBreakpoint(store, 1)
        if(i-1 >= 0 && store.data[i-1].value < store.data[i].value) {
            store.selectDataBlock(i-1, 'secondary')
            await setBreakpoint(store, 2)
            store.selectDataBlock(i-1, 'dark')
        }
        for(let j = i - 1; j >= 0 && store.data[j].value > store.data[i].value; j--) {
            store.selectDataBlock(i-1, 'secondary')
            await setBreakpoint(store, 2)
            store.swapDataBlock(j , i)
            await setBreakpoint(store, 3)
            store.selectDataBlock(i, 'dark')
            i = j;
            store.selectDataBlock(j, 'primary')
            await setBreakpoint(store, 4)
        }
        store.selectDataBlock(i, 'dark')
        await setBreakpoint(store, 5)
    }
    await setBreakpoint(store, 6)
    store.data.forEach((_, index) => {
        store.selectDataBlock(index, 'secondary')
    })
    store.setActiveLines(-1, -1)
}

export default insertionSort