import React from 'react';
import { View, Text, StyleSheet, Button, Image, Dimensions, ScrollView, SafeAreaView } from 'react-native';
import DefaultStyles from '../constants/default-styles';
import Colors from '../constants/colors';
import MainButton from '../components/MainButton';

const GameOverScreen = props => {
    return (

        <ScrollView>
            <View style={styles.screen}>
                <Text style={DefaultStyles.title}>The Game is Over</Text>
                <View style={styles.imageContainer}>
                    <Image
                        fadeDuration={1000}
                        source={require('../assets/success.png')}
                        style={styles.image}
                        resizeMode='cover'
                    />
                </View>
                <View style={styles.resultContainer}>
                    <Text style={{ ...DefaultStyles.bodyText, ...styles.resultText }}>Your phone needed <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{props.userNumber}</Text></Text>
                </View>
                <MainButton onPress={props.onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>

    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10
    },
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 14 : 19
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    highlight: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold',
    }
});

export default GameOverScreen;