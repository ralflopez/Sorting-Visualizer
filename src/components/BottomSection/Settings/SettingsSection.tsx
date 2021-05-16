import { observer } from 'mobx-react-lite'
import React from 'react'
import DataInput from './DataInput'
import SpeedSlider from './SpeedSlider'

const SettingsSection = () => {
    return (
        <div>
            <SpeedSlider />
            <div>
                <p>Add Data: </p>
                <DataInput />
            </div>
        </div>
    )
}

export default observer(SettingsSection)
