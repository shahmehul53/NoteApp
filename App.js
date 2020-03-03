import React from 'react';
import {View, Text} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import Routes from './src/navigation';

const App = () => {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
};

export default App;
