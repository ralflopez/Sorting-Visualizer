import React, { useState, useRef } from 'react'
import { DarkerContainer, Highlighted, TextArea } from './CodeSection.styled'

const CodeSection = () => {
    const [code, setCode] = useState<string>(`function selectionSort(arr) {
        let min;
        for(let i = 0; i < arr.length - 1; i++) {
            min = i;
            for(let j = i + 1; j < arr.length; j++) {
                if(arr[j] < arr[min]) {
                    min = j
                }
            }
            if(min !== i) {
                ([arr[i], arr[min]] = [arr[min], arr[i]])
            }
        }
      }`)
    const [activeLine, setActiveLine] = useState<number[]>([-1, -1])
    let tarea = useRef(null)

    return (
        <div>
            <DarkerContainer>
                {/* <TextArea value={code} ref={(ref: any) => tarea = ref}/> */}
                <TextArea>
                    {
                        code.replace(/ /g, '\u00A0').split('\n').map((item: string, index: number) => {
                            if(index >= activeLine[0] && index <= activeLine[1])
                                return (
                                    <Highlighted>{item}</Highlighted>
                                )
                            return (<p>{item}</p>)
                        })
                    }
                </TextArea>
            </DarkerContainer>
        </div>
    )
}

export default CodeSection
