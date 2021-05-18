import { SortStore } from "../mobx/Store"

export const sleep = (delay: number) => {
    return new Promise((resolve: any) => setTimeout(resolve, delay))
}

export const setBreakpoint = async (store: SortStore, line: number) => {
    store.setActiveLines(line, line)
    if(store.speed > 0) await sleep(store.speed)
}