/**
 * @author Gagana Lakruwan
 */
import React from 'react';
import RootNavigator from './Navigation/RootNavigator';
import {Provider} from 'react-redux';
import {store, persistor} from './Redux/Store';
import {PersistGate} from 'redux-persist/integration/react';

const componentName = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
};
export default componentName;
