import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/index';
import ThemeProvider from './utils/ThemeProvider';

export default function App() {
  
  return (
    <ReduxProvider store={store}>
      <ThemeProvider>
        <View style={styles.container}>
          <Text>Bonjour</Text>
          <StatusBar style="auto" />
        </View>
        </ThemeProvider>
    </ReduxProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
