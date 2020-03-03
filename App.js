import React from 'react';
import {View, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './src/navigation';
import {Provider as NoteProvider} from './src/context/NoteContext';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <Routes />
      </PaperProvider>
    </StoreProvider>
  );
};

export default App;
