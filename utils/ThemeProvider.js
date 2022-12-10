import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

export default function ThemeProvider ({children}) {
    const currentTheme = useSelector(store => store?.theme);

    const theme = {
        ...DefaultTheme,
        //...currentTheme,
    };

    return (
        <PaperProvider theme={theme}>{children}</PaperProvider>
    )
}