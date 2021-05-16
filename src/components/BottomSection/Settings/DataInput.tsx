import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { useSortStore } from '../../../mobx/Context'
import { Button, Flex, Input } from './DataInput.styled'

const DataInput = () => {
    const [value, setValue] = useState<string>('')
    const store = useSortStore()

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleAdd = (e: any) => {
        const parsedValue = Number(value)
        store.addData(parsedValue)
        setValue('')
    }

    return (
        <Flex>
            <Input 
                value={value}
                onChange={handleEdit}
            />
            <Button
                onClick={handleAdd}
            >
                Add
            </Button>
        </Flex>
    )
}

export default observer(DataInput)
