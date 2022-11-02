import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-web';

export default function App() {

  // fadeAnim will be used as the value for opacity. Initial Value: 0
  const fadeAnim = useRef(new Animated.Value(0)).current; 
    
  console.log(fadeAnim);
  
    
  console.log(pan);

  function fadeIn(){
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000
      }).start();
  }
  function fadeOut(){
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000
    }).start();
}

  return (
    <View style={styles.container}>
    <Animated.View style={{opacity: fadeAnim}}>
      <Text>Open up App.js to start working on your app!</Text>
    </Animated.View>
    <Button title="Fade In" onPress={fadeIn}></Button>
    <Button title="Fade Out" onPress={fadeOut}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
     
  },
});

