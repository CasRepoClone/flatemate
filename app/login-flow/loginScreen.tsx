import { View, Text, Image, ImageBackground, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function Screentwo() {
  const router = useRouter();

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
        {/* Oauth2 hook here please*/}
        <Pressable style={styles.button}>
          <Ionicons name="arrow-forward" size={20} color="white" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Sign in with google</Text>
          
        </Pressable>

        {/* Phone verification with firebase and transition to phone verif screens */}
        <Pressable style={styles.button} onPress={() => router.push('./phoneInput')}>
          <Ionicons name="arrow-forward" size={20} color="white" style={{ marginRight: 8 }} />
          <Text style={styles.buttonText}>Sign in with number</Text>
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
    ...StyleSheet.absoluteFillObject, // overlays black over the screen to fake opacity on the background to not affect children
    backgroundColor: 'black',
    opacity: 0.8, // 20% opacity (100-80=20)
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
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 24,
    margin: 20,
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
});
