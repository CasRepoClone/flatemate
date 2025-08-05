import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Pressable, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function formProfession() {
    const router = useRouter();
    const [phone, setPhone] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    return (
        <ImageBackground
            source={require('../../assets/images/background-image.jpg')}
            style={styles.background}
            resizeMode="cover"
        >
            {/* Overlay with 20% opacity black */}
            <View style={styles.overlay} />

            <View style={styles.container}>
                <Image
                    source={require('../../assets/images/brand-logo.png')}
                    style={styles.centerImage}
                    resizeMode="contain"
                />
                <Text style={styles.instructionText}>
                    Tell us a little about yourself
                </Text>


                {/* Divider bar above input */}
                <View style={styles.divider} />

                <Text style={styles.buttonText}>
                are you a
                </Text>
                    <View style={styles.row}>
                        <Pressable onPress={() => router.push('./landlord/location')}>
                            <Text style={styles.selectText}>LANDLORD</Text>
                        </Pressable>

                        <Text style={styles.orText}>or</Text>

                        <Pressable onPress={() => router.push('./student/budget')}>
                            <Text style={styles.selectText}>STUDENT</Text>
                        </Pressable>
                    </View>

                    {/* code validation input */}

            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'black',
        opacity: 0.8,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 100,
    },
    centerImage: {
        width: 130,
        height: 130,
        marginBottom: -17, // reduce if spacing is too wide
    },
    divider: {
        height: 1,
        backgroundColor: 'black',
        alignSelf: 'stretch',
        marginHorizontal: 40,
        marginBottom: 12,
    },
    input: {
        width: '80%',
        fontSize: 20,
        color: 'white',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'gray',
        marginBottom: 30,
    },
    inputFocused: {
        borderBottomColor: '#007AFF',
    },
    button: {
        flexDirection: 'row',
        backgroundColor: '#007AFF',
        paddingVertical: 14,
        paddingHorizontal: 24,
        margin: 10,
        borderRadius: 12,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 6,
        elevation: 3,
    },
    buttonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '600',
    },
    instructionText: {
        fontFamily: 'Inter_400Regular',
        fontSize: 28,
        lineHeight: 34,
        letterSpacing: 0.38,
        textAlign: 'center',
        color: 'white',
        marginBottom: 20,
        width: 243,
        height: 73,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center', // centers the row horizontally
        alignItems: 'center',     // vertically aligns texts if needed
        gap: 20, // This works in newer versions of React Native
    },
    selectText: {
        fontFamily: 'SF Pro', // Ensure this font is loaded
        fontWeight: '700',
        fontStyle: 'normal',
        fontSize: 28,
        lineHeight: 34,
        letterSpacing: 0.38,
        textAlign: 'center',
        color: 'white',
    },
    orText: {
        fontFamily: 'SF Pro',
        fontWeight: '400',
        fontSize: 28,
        lineHeight: 34,
        letterSpacing: 0.38,
        textAlign: 'center',
        color: '#FF383C80',
        opacity: 0.9,
    },
});
