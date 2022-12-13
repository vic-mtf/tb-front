import { View } from 'react-native';
import { Surface } from 'react-native-paper';
import { loginView as styles } from '../../styles/loginView.styles';
import Content from './Content';
import Header from './Header';

export default function LoginView () {

    return (
        <View style={styles.container}>
            <Surface style={styles.surface}>
                <Header/>
                <Content/>
            </Surface>
        </View>
    )
};