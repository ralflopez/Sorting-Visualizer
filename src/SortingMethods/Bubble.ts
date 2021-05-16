import { SortStore } from "../mobx/Store";
import { setBreakpoint } from './uiSync'

async function bubbleSort(store: SortStore) {
    let noSwaps = true; 
    await setBreakpoint(store, 1);
    for(let i = store.data.length; i > 0; i--) { 
        await setBreakpoint(store, 2);
        noSwaps = true; 
        await setBreakpoint(store, 3);
        for(let j = 0; j < i - 1; j++) { 
            store.selectDataBlock(j, 'primary')
            store.selectDataBlock(j+1, 'tertiary')
            await setBreakpoint(store, 3);
            if(store.data[j].value > store.data[j+1].value) { 
                await setBreakpoint(store, 4);
                store.swapDataBlock(j, j+1); 
                await setBreakpoint(store, 5);
                noSwaps = false; 
                await setBreakpoint(store, 6);
            } 
            store.selectDataBlock(j, 'dark')
            store.selectDataBlock(j+1, 'dark')
            await setBreakpoint(store, 7);
        } 
        await setBreakpoint(store, 8);
        if(noSwaps) break; 
        await setBreakpoint(store, 9);
        store.selectDataBlock(i - 1 , 'secondary')
    } 
    await setBreakpoint(store, 10)
    await setBreakpoint(store, 11)
    store.data.forEach((_, index) => {
        store.selectDataBlock(index, 'secondary')
    })
    store.setActiveLines(-1, -1)
}

export default bubbleSort