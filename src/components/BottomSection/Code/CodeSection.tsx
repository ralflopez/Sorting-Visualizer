import { observer } from 'mobx-react-lite'
import React, { useState, useRef } from 'react'
import { useSortStore } from '../../../mobx/Context'
import { SortStore } from '../../../mobx/Store'
import { DarkerContainer, Highlighted, TextArea } from './CodeSection.styled'
import * as codes from '../../../SortingMethods/rawCodes'

const CodeSection = () => {
    const store: SortStore = useSortStore()
    //@ts-ignore
    const code = codes[store.strategy]
    
    return (
        <div>
            <DarkerContainer>
                {/* <TextArea value={code} ref={(ref: any) => tarea = ref}/> */}
                <TextArea>
                    {
                        code.replace(/ /g, '\u00A0').split('\n').map((item: string, index: number) => {
                            if(index >= store.activeLines[0] && index <= store.activeLines[1])
                                return (
                                    <Highlighted key={index}>
                                        {item}
                                    </Highlighted>
                                )
                            return (
                                <p key={index}>
                                    {item}
                                </p>
                            )
                        })
                    }
                </TextArea>
            </DarkerContainer>
        </div>
    )
}

export default observer(CodeSection)
