
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from 'react-native';
import { Link, useLocation } from "react-router-native";

export default function HomeView () {
    const local = useLocation();
    console.log(local);
    return (
        <View style={styles.container}>
            <Text>Welcome home page!</Text>
            <StatusBar style="auto" />
            <Link to="/home">
                <Text>Visit home pages</Text>
            </Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });