import React from 'react'
import Container from '../General/Container'
import { Main } from './MainSection.styled'
import VisualizerBox from './VisualizerBox/VisualizerBox'

const MainSection = () => {
    return (
        <Main>
            <Container>
                <VisualizerBox />
            </Container>
        </Main>
    )
}

export default MainSection
