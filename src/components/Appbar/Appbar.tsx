import { observer } from 'mobx-react-lite'
import React from 'react'
import logo from '../../assets/logo.svg'
import { useSortStore } from '../../mobx/Context'
import { SortStore } from '../../mobx/Store'
import PlayControl from '../Controls/PlayControl'
import RepeatControl from '../Controls/RepeatControl'
import Container from '../General/Container'
import Dropdown from '../General/Dropdown'
import { Bar, Flex, Logo } from './Appbar.styled'
import { handleReset } from '../Controls/resetHandler'

const Appbar = () => {
    const store: SortStore = useSortStore()

    const handleResetAction = () => {
        handleReset(store)
    }

    const changeActive = (name: string) => {
        handleResetAction()
        store.setStrategy(name)
    }

    return (
        <Bar>
            <Container>
                <Logo src={logo} />
                <Flex>
                    <p>Strategy:</p>
                    <Dropdown 
                        title={store.strategy}
                    >
                        <Dropdown.Option onClick={() => changeActive('Bubble')}>Bubble</Dropdown.Option>
                        <Dropdown.Option onClick={() => changeActive('Selection')}>Selection</Dropdown.Option>
                        <Dropdown.Option onClick={() => changeActive('Insertion')}>Insertion</Dropdown.Option>
                    </Dropdown>
                </Flex>
                <RepeatControl />
                <PlayControl />
            </Container>
        </Bar>
    )
}

export default observer(Appbar)
