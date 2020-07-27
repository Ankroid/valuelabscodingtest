import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    ImageBackground
} from 'react-native';

const Header = props => {
    const { children, elevation, opacity, style, text } = props;
    return (
        <View style={[styles.headerStyle, style]}>
            <ImageBackground source={require('../../assets/background.jpg')}
                style={styles.bgImageStyle}>
                <Text style={styles.textStyle}>{text}</Text>
            </ImageBackground>
            <View style={styles.imageContStyle}>
                <View style={styles.imageBorderStyle}>
                    <Image source={require('../../assets/image.jpg')}
                        style={styles.profileImageStyle} />
                </View>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    headerStyle: {
        elevation: 9,
        backgroundColor: 'black',
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 20,
        color: 'white',
        marginTop: 40
    },
    bgImageStyle: {
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    imageContStyle: {
        width: '100%',
        position: 'absolute',
        bottom: -60,
        alignItems: 'center',
        marginTop: -20
    },
    imageBorderStyle: {
        borderColor: "#fff",
        borderWidth: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 65,
        width: 125,
        height: 125
    },
    profileImageStyle: {
        width: 120, height: 120,
        borderRadius: 60
    }
})

export default Header;