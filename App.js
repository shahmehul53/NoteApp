import React from 'react';
import {View, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './src/navigation';
import {Provider as NoteProvider} from './src/context/NoteContext';

const App = () => {
  return (
    <NoteProvider>
      <Routes />
    </NoteProvider>
  );
};

export default App;
