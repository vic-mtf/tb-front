
import { StatusBar } from "expo-status-bar"
import { Text, View } from 'react-native';
import styles from "../../styles/homeView.style";

export default function HomeView () {

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text>Welcome home page!</Text>
        </View>
    );
}