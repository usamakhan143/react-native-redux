/* eslint-disable prettier/prettier */
import { Text, View } from "react-native";
import styles from "../styles";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const AppHeader = () => {
    const cartItemData = useSelector((state) => state.reducer);
    const [cartItemCount, setCartItemCount] = useState(0);

    useEffect(() => {
        setCartItemCount(cartItemData.length);
    }, [cartItemData]);

    return (
        <View style={styles.headerStripArea}>
            <Text style={styles.counter}>Cart items: {cartItemCount}</Text>
        </View>
    );
}

export default AppHeader;