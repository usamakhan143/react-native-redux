/* eslint-disable prettier/prettier */
import { Button, Text, View } from "react-native";
import styles from "../styles";
import { addToCart } from './redux/action';
import { useDispatch } from "react-redux";

const Product = (item) => {

    const dispatch = useDispatch();
    const handleAddToCart = (data) => {
        dispatch(addToCart(data));
        // console.warn(data);
    }

    return (
        <View style={styles.item}>
            <Text style={styles.protitle}>{item.name}</Text>
            <Text style={[styles.protitle, styles.proprice]}>${item.price}</Text>
            <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
        </View>
    );
}

export default Product;