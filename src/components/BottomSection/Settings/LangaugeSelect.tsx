import React from 'react'
import { useSortStore } from '../../../mobx/Context'
import { SortStore } from '../../../mobx/Store'
import Dropdown from '../../General/Dropdown'

const LangaugeSelect = () => {
    const store: SortStore = useSortStore()

    return (
        <div>
            <p>Language: </p>
            <Dropdown 
                title={store.language}
                color="secondary"
            >
                <Dropdown.Option onClick={() => store.setLanguage('Javascript')}>Javascript</Dropdown.Option>
            </Dropdown>
        </div>
    )
}

export default LangaugeSelect
