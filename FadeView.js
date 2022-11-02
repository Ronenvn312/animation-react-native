import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native';


export default function FadeView() {

  const fadeAnim = useRef(new Animated.Value(1)).current;//current: 
  
  function FadeIn(){
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 2000
    }).start();
  }

  return (
    <View style={styles.container}>
      <Animated.View style={{opacity: fadeAnim }}>
        <Text>Show Animation!</Text>
      </Animated.View>
      <Button title='Disapear' onPress={FadeIn}></Button>
    
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

