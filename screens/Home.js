import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import styles from "../styles";
import { View, Text } from "react-native";
import { useTheme } from "../context/useTheme";

export default function Home() {
    const {isDarkMode} = useTheme()
    
    return (
        <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
            <Text style={isDarkMode ? styles.dark : styles.light}>Home</Text>
        </View>
    )
}