/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppContext from './AppContext';
import useController from './AppController';

const {Provider} = AppContext;

import Home from './src/views/Home';

const App = () => {
  const {state, dispatch} = useController();

  return (
    <SafeAreaView style={{flex: 1}}>
      <Provider value={{state, dispatch}}>
        <StatusBar barStyle={'light-content'} />
        <Home />
      </Provider>
    </SafeAreaView>
  );
};

export default App;
