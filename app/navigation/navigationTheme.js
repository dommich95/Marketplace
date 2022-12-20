import { DefaultTheme } from "@react-navigation/native";
import { checkPluginState } from "react-native-reanimated/lib/reanimated2/core";
import colors from "../config/colors";

export default {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary,
        background: colors.white
    }
}