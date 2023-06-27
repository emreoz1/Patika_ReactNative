import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductsCard.style';




const ProductsCard = ({products}) => {
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{url: products.imgURL}} />
            <View style={styles.inner_container}>
                <Text style={styles.title}>{products.title}</Text>
                <Text style={styles.price}>{products.price}</Text>
                <Text style={styles.inStock}>{products.inStock ?  "" : "STOKTA YOK"}</Text>
            </View>
        </View>
    );
};

export default ProductsCard;