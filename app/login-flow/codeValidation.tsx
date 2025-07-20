import React, { useState } from 'react';
import { View, Text, Image, ImageBackground, Pressable, TextInput, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function CodeValidatiion() {
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
        Please enter the code recieved
        </Text>

        {/* Divider bar above input */}
        <View style={styles.divider} />

        {/* code validation input */}
        <TextInput
          style={[styles.input, isFocused && styles.inputFocused]}
          placeholder="ENTER THE CODE HERE E.G. (XDS-GSD-SDS)"
          placeholderTextColor="white"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Validate input and next screen */}
        <Pressable style={styles.button}>
          <Ionicons name="arrow-forward" size={20} color="white" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>

        {/* Resend the code */}
        <Pressable style={styles.button} onPress={() => router.push('./screen-two')}>
          <Ionicons name="arrow-forward" size={20} color="white" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Resend code</Text>
        </Pressable>

        {/* Go back a screen to change number */}
        <Pressable style={styles.button} onPress={() => router.push('./screen-two')}>
          <Ionicons name="arrow-forward" size={20} color="white" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Change number</Text>
        </Pressable>
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
});
