import { Text } from 'react-native-paper'
import { View } from 'react-native';
import { header as styles } from '../../styles/loginView.styles';

export default function Header () {
    return (
        <View style={styles.container}>
            <View>

            </View>
            <View
                style={styles.subTitle}
            >
                <Text variant='headlineSmall'>Connexion</Text>
            </View>
        </View>
    )
}