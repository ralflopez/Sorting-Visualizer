import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSortStore } from '../../../mobx/Context'
import { SortStore } from '../../../mobx/Store'
import Dropdown from '../../General/Dropdown'
import DataInput from './DataInput'

const SettingsSection = () => {
    const store: SortStore = useSortStore()

    return (
        <div>
            <div>
                <p>Language: </p>
                <Dropdown 
                    title={store.language}
                    color="secondary"
                >
                    <Dropdown.Option onClick={() => store.setLanguage('Javascript')}>Javascript</Dropdown.Option>
                </Dropdown>
            </div>
            <div>
                <p>Add Data: </p>
                <DataInput />
            </div>
        </div>
    )
}

export default observer(SettingsSection)
