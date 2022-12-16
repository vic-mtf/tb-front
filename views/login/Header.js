import { ProgressBar, Text } from 'react-native-paper'
import { View } from 'react-native';
import { header as styles } from '../../styles/loginView.styles';

export default function Header () {
    return (
        <View style={styles.container}>
            <View
                style={styles.subTitle}
            >
                <Text variant='titleLarge'>Connexion</Text>
            </View>
        </View>
    )
}