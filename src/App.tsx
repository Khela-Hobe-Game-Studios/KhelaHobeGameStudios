import React, { useState } from 'react'
import { KuiProvider, PageBackground, Button, type KuiColorMode, type KuiTheme } from '@khelahobe/kui'
import Hero from './components/Hero'
import Games from './components/Games'
import Teams from './components/Teams'

const App: React.FC = () => {
  const [colorMode, setColorMode] = useState<KuiColorMode>('dark')

  const theme: KuiTheme = colorMode === 'light' ? 'daktar' : 'default'

  const toggleMode = () => {
    setColorMode(prev => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <KuiProvider theme={theme} colorMode={colorMode} className="kui-app">
      <PageBackground variant={colorMode === 'dark' ? 'dark' : 'default'} />
      <div className="mode-toggle">
        <Button variant="ghost" size="sm" onClick={toggleMode}>
          {colorMode === 'dark' ? '☀ Light' : '☾ Dark'}
        </Button>
      </div>
      <Hero />
      <Games />
      <Teams />
    </KuiProvider>
  )
}

export default App
