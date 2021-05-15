import React from 'react'
import { Block } from './DataBlock.styled'

interface Props {
    value: number | string,
    color?: string,
    height: number
}

const DataBlock = ({ value, color = 'dark', height }: Props) => {
    return (
        <Block color={color} height={height}>
            {value}
        </Block>
    )
}

export default DataBlock
