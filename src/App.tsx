import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import BottomControls from './components/BottomSection/BottomControls'
import MainSection from './components/MainSection/MainSection'
import Appbar from './components/Appbar/Appbar'
import theme from './theme'
import './App.css'
import StoreProvider from './mobx/Context'

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
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <Appbar />
        <Layout>
          <MainSection />
          <BottomControls />
        </Layout>
      </ThemeProvider>
    </StoreProvider>
  )
}

export default App
