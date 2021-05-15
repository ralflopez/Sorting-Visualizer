import React, { useState } from 'react'
import { PlayFill, ArrowCounterclockwise } from 'react-bootstrap-icons'
import logo from '../../assets/logo.svg'
import Container from '../General/Container'
import Dropdown from '../General/Dropdown'
import { Bar, Controls, Flex, Logo } from './Appbar.styled'

const Appbar = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [active, setActive] = useState<string>('Selection')

    const toggleDropdown = () => {
        setShowDropdown((cur: boolean) => !cur)
    }

    const changeActive = (name: string) => {
        setActive(name)
    }

    return (
        <Bar>
            <Container>
                <Logo src={logo} />
                <Flex>
                    <p>Strategy:</p>
                    <Dropdown 
                        isShown={showDropdown}
                        setShown={setShowDropdown}
                        title={active}
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

export default Appbar
