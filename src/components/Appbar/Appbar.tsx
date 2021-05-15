import { observer } from 'mobx-react-lite'
import React, { useEffect, useState } from 'react'
import { PlayFill, ArrowCounterclockwise } from 'react-bootstrap-icons'
import logo from '../../assets/logo.svg'
import { useSortStore } from '../../mobx/Context'
import { SortStore } from '../../mobx/Store'
import Container from '../General/Container'
import Dropdown from '../General/Dropdown'
import { Bar, Controls, Flex, Logo } from './Appbar.styled'

const Appbar = () => {
    const store: SortStore = useSortStore()

    const changeActive = (name: string) => {
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
                <Controls>
                    <ArrowCounterclockwise color="#272727" size={30} />
                </Controls>
                <Controls>
                    <PlayFill color="#87ED76" size={50}/>
                </Controls>
            </Container>
        </Bar>
    )
}

export default observer(Appbar)
