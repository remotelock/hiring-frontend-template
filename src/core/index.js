import React from 'react'
import {Provider} from 'react-redux'
import {SafeAreaProvider} from 'react-native-safe-area-context'

import store from './redux'
import Navigation from './navigation'

function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App
