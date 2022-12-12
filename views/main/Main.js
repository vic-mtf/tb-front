import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from 'react-native';
import * as React from "react";
import { NativeRouter, Route, Routes as Router } from "react-router-native";
import HomeView from "../home/HomeView";

export default function Main () {
    return (
        <NativeRouter>
            <Router>
                <Route  path="*" element={<HomeView />} /> 
            </Router>
        </NativeRouter>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  