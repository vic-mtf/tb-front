import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/index';
import ThemeProvider from './utils/ThemeProvider';
import Main from './views/main/Main';

export default function App() {
  
  return (
    <React.StrictMode>
      <ReduxProvider store={store}>
        <ThemeProvider>
          <Main/>
          </ThemeProvider>
      </ReduxProvider>
    </React.StrictMode>
  );
}
