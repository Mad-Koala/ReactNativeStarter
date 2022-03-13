import {NavigationContainer} from '@react-navigation/native';
import * as React from 'react';
import RNBootSplash from 'react-native-bootsplash';
import AuthStack from './navigationStacks';
import {Provider} from 'react-redux';
import {store} from 'store/setup';
console.log(store, 'storestore');
RNBootSplash.hide();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
