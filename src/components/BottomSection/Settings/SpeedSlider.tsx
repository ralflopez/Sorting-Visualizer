import { observer } from 'mobx-react-lite'
import React from 'react'
import { useSortStore } from '../../../mobx/Context'
import { SortStore } from '../../../mobx/Store'
import { Header, SecondaryText, Slider } from './SpeedSlidet.styled'

const SpeedSlider = () => {
    const store: SortStore = useSortStore()

    const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value: number = Number(e.target.value)
        store.setSpeed(value)
    }

    return (
        <div>
            <Header>
                <p>Speed:</p>
                <SecondaryText>{store.speed < 0 ? 0 : store.speed}</SecondaryText>
            </Header>
            <Slider 
                type="range" 
                min={0} 
                max={1500} 
                step={10}
                value={store.speed}
                onChange={handleSpeedChange}
                disabled={store.isExecuting}
            />
        </div>
    )
}

export default observer(SpeedSlider)
