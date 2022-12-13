import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as React from "react";
import { ProviderRouter, Route, Routes as Router } from "../../components/react-router-app";
import HomeView from "../home/HomeView";
import { LinearGradient } from 'expo-linear-gradient';
import LoginView from "../login/LoginView";

export default function Main () {
    return (
        <View style={styles.container}>
            <LinearGradient  
                style={styles.linearGradient}
                {...LinearGradientProps}
            >
                <ProviderRouter>
                    <React.Fragment>
                        <Router>
                            <Route  path="*" element={<HomeView />} /> 
                            <Route  path="/signin/*" element={<LoginView />} /> 
                        </Router>
                    </React.Fragment>
                </ProviderRouter>
            </LinearGradient>
        </View>
    );
};

const { height, width } = Dimensions.get('window');

const LinearGradientProps = {
    colors: ['#00509215', '#ff033e15', '#ffff0015', '#00ff0015', ],
    start: { x: 0, y: 0.5 },
    end: { x: .5, y: 1 },
    locations: [0, 1/4, 0.5, 1],
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eee',
    },
    linearGradient: {
        width,
        height,
        flex: 1,
        display: 'flex',
        backgroundColor: '#eee',
    }
});