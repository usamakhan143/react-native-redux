/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { Button, Text, View } from "react-native";
import styles from "../styles";
import { addToCart, removeFromCart } from './redux/action';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Product = (item) => {

    const dispatch = useDispatch();
    const handleAddToCart = (data) => {
        dispatch(addToCart(data));
        // console.warn(data);
    }

    const handleRemoveFromCart = (data) => {
        dispatch(removeFromCart(data.name));
    }

    const cartItemsData = useSelector((state) => state.reducer);

    // State for checking the product is added into the cart?
    const [isAdded, setIsAdded] = useState(false);

    useEffect(() => {

        let results = cartItemsData.filter(element => {
            return element.name === item.name;
        });
        if (results.length) {
            setIsAdded(true);
        }
        else {
            setIsAdded(false);
        }

    }, [cartItemsData]);

    return (
        <View style={styles.item}>
            <Text style={styles.protitle}>{item.name}</Text>
            <Text style={[styles.protitle, styles.proprice]}>${item.price}</Text>
            {isAdded ?
                <Button title="Remove from cart" onPress={() => handleRemoveFromCart(item)} />
                :
                <Button title="Add to cart" onPress={() => handleAddToCart(item)} />
            }
        </View>
    );
}

export default Product;