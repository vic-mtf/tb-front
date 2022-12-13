import * as React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/index';
import ThemeProvider from './utils/ThemeProvider';
import Main from './views/main/Main';

export default function App() {
  
  return (
      <ReduxProvider store={store}>
        <ThemeProvider>
          <Main/>
        </ThemeProvider>
      </ReduxProvider>
  );
}

