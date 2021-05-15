import React, { useState } from 'react'
import styled from 'styled-components'
import Dropdown from '../../General/Dropdown'
import AddButton from './AddButton'
import DataInput from './DataInput'

const Flex = styled.div`
    display: flex;
`

const SettingsSection = () => {
    const [showLangDropdown, setShowLangDropdown] = useState<boolean>(false)
    const [language, setLanguage] = useState<string>('Javascript')

    return (
        <div>
            <div>
                <p>Language: </p>
                <Dropdown 
                    isShown={showLangDropdown}
                    setShown={setShowLangDropdown}
                    title={language}
                    color="secondary"
                >
                    <Dropdown.Option onClick={() => setLanguage('Javascript')}>Javascript</Dropdown.Option>
                </Dropdown>
            </div>
            <div>
                <p>Add Data: </p>
                <Flex>
                    <DataInput />
                    <AddButton />
                </Flex>
            </div>
        </div>
    )
}

export default SettingsSection
