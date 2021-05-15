import React from 'react'
import Container from '../General/Container'
import { Layout, Section } from './BottomControles.styled'
import CodeSection from './Code/CodeSection'
import DataSection from './Data/DataSection'
import SettingsSection from './Settings/SettingsSection'

const BottomControls = () => {
    return (
        <Section>
            <Container>
                <Layout>
                    <DataSection />
                    <SettingsSection />
                    <CodeSection />
                </Layout>
            </Container>
        </Section>
    )
}

export default BottomControls
