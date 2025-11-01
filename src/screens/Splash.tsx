import React, {useEffect} from "react";
import { View, Image, StyleSheet } from 'react-native';

// const Splash = ({ onFinish})

const Splash = ({onFinish}: {onFinish: () => void}) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 3000);

        return () => clearTimeout(timer);
    }, [onFinish]);
    return (

        <View style={styles.container}>
            <Image
                source={require('../assets/images/auto.png')}
                style={styles.logo}
                resizeMode="contain"
            />    
        </View>
    );
}
export default Splash;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});