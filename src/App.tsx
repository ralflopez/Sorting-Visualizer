import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import BottomControls from './components/BottomSection/BottomControls'
import MainSection from './components/MainSection/MainSection'
import Appbar from './components/Appbar/Appbar'
import theme from './theme'
import './App.css'

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: calc(100vh - 59px);
  margin-top: 59px;
  min-height: 500px;
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Appbar />
      <Layout>
        <MainSection />
        <BottomControls />
      </Layout>
    </ThemeProvider>
  )
}

export default App
