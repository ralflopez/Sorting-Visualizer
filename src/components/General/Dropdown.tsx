import React, { useEffect, useRef } from 'react'
import { DropdownButton, DropdownItem, DropdownParent, DropdownSelection } from './Dropdown.styled'
import { CaretDown } from 'react-bootstrap-icons'

interface TDropdown {
    children: any,
    isShown: boolean,
    setShown: any,
    title: string,
    color?: string,
    selectionPosition?: string
}

const Dropdown = ({ children, isShown = false, setShown, title, color = "primary", selectionPosition = "bottom" }: TDropdown) => {
    const options: any = React.Children.map(children, (child: any) => child.type.name === 'Option' ? child : null)
    let selectionWindow: React.MutableRefObject<any> = useRef(null)

    useEffect(() => {
        const clickOutside = (e: any) => {
            if(selectionWindow.current && !selectionWindow.current.contains(e.target)) {
                setShown(false)
            }
        }

        if(isShown)
            document.addEventListener('click', clickOutside)

        return () => {
            document.removeEventListener('click', clickOutside)
        }
    }, [isShown, selectionWindow])

    const toggleDropdown = () => {
        setShown((cur: any) => !cur)
    }

    return (
        <DropdownParent>
            <DropdownButton color={color} onClick={toggleDropdown}>
                {title} <CaretDown />
            </DropdownButton>
            {
                isShown
                &&
                (
                    <DropdownSelection ref={selectionWindow} color={color} selectionPosition={selectionPosition}>
                        {options}
                    </DropdownSelection>
                )
            }
        </DropdownParent>
    )
}

const Option = ({children, ...rest}: any) => {
    return (
        <DropdownItem {...rest}>
            {children}
        </DropdownItem>
    )
}
Dropdown.Option = Option

export default Dropdown