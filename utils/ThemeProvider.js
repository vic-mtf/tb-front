import { useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import { useSelector } from 'react-redux';

export default function ThemeProvider ({children}) {
    const currentTheme = useSelector(store => store?.theme.value);
    const colorShema = useColorScheme();
    const mode = currentTheme === 'automatic' ? colorShema : currentTheme;

    const theme = useMemo(() => ({
        ...DefaultTheme,
        dark: 'dark' === mode,
    }), [mode]);


    return (
        <PaperProvider theme={theme}>{children}</PaperProvider>
    )
}