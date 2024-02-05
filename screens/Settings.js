import { View } from "react-native";
import React from "react";
import ThemeSwitchButton from "../components/ThemeSwitchButton";
import { useTheme } from "../context/useTheme";
import styles from "../styles";

export default function Settings() {
    const { isDarkMode } = useTheme()
    return (
        <View style={[styles.container, isDarkMode ? styles.dark : styles.light]}>
            <ThemeSwitchButton />
        </View>
    )
}