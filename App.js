import { StatusBar } from 'expo-status-bar';
import { useRef, useState } from 'react';
import { Alert, Animated, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button, Image, TouchableOpacity } from 'react-native';
import icon from './assets/tom.png'
import jerry from './assets/jerry.png'

export default function App() {

  const [location, setLocation]
    = useState({
      x: null,
      y: null,
      marginLeft: new Animated.Value(10),
      marginTop: new Animated.Value(10)
    });
  const [location1, setLocation1] = useState({
    x1: null,
    y1: null,
    marginLeft1: new Animated.Value(0),
    marginTop1: new Animated.Value(10)
  });
  const [location2, setLocation2] = useState({
    x2: null,
    y2: null,
    marginLeft2: new Animated.Value(50),
    marginTop2: new Animated.Value(50)
  });
  const [index, setIndex] = useState({});
  const [index1, setIndex1] = useState({});
  const [index2, setIndex2] = useState({});
  const [numCatch, setNumCatch] = useState(0)

  function onPress(evt) {

    var x = evt.nativeEvent.locationX;
    var y = evt.nativeEvent.locationY;
    setIndex({ x, y })
    var x1 = Math.floor(Math.random() * 100);
    var y1 = Math.floor(Math.random() * 100);
    setIndex1({ x1, y1 })

    var x2 = Math.floor(Math.random() * 100);
    var y2 = Math.floor(Math.random() * 100);
    setIndex2({ x2, y2 })
    if(numCatch <3 ){
      setNumCatch(numCatch+1)
    }else {
      setIndex1({ x1:0, y1:0 })
      setIndex2({ x2:0, y2:0 })
      setNumCatch(0)
      Alert.alert("Chuột đã chạy mất !")
    }

  }
  function onPressCatchMouse(indexX, indexY) {
    var x = indexX;
    var y = indexY
    setIndex({ x, y })
    var x1 = Math.floor(Math.random() * 100);
    var y1 = Math.floor(Math.random() * 100);
    setIndex1({ x1, y1 })

    var x2 = Math.floor(Math.random() * 100);
    var y2 = Math.floor(Math.random() * 100);
    setIndex2({ x2, y2 })
    if(numCatch <3 ){
      setNumCatch(numCatch+1)
    }else {
    setIndex({ x, y })
      setNumCatch(0)
      Alert.alert("Chúc mừng bạn đã bắt chuột thành công !")
    }
    console.log('====================================');
    console.log(index);
    console.log('====================================');
  }
  function onMove(evt) {
    setLocation({
      x: index.x,
      y: index.y,
      marginLeft: index.x,
      marginTop: index.y
    })
    setLocation1({
      x1: index1.x1,
      y1: index1.y1,
      marginLeft1: index1.x1,
      marginTop1: index1.y1
    })
    setLocation2({
      x2: index2.x2,
      y2: index2.y2,
      marginLeft2: index2.x2,
      marginTop2: index2.y2
    })


    console.log('====================================');
    console.log(location);
    console.log('====================================');
    //setLocation({marginLeft: x, marginTop: y })
  }
  function onRelease() {
    console.log("Realse!");
  }
  const { marginTop, marginLeft } = location;
  const { marginTop1, marginLeft1 } = location1;
  const { marginTop2, marginLeft2 } = location2;

  return (
    <View
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderGrant={onPress}
      onResponderMove={onMove}
      onResponderRelease={onRelease}
      style={styles.container}>
      <View
        style={{ marginLeft: marginLeft1, marginTop: marginTop1 ,width: 40, height: 50 }}>
        <TouchableOpacity
          onPress={() => onPressCatchMouse(marginLeft1,marginTop1)}
        >
          <Animated.Image
            source={jerry}
            style={{ width: 40, height: 50 }} >
          </Animated.Image>
        </TouchableOpacity>
      </View>
      <View
        style={{ marginLeft: marginLeft2, marginTop: marginTop2, width: 40, height: 50 }}>
        <TouchableOpacity
          onPress={() => onPressCatchMouse(marginLeft2,marginTop2)}
        >
          <Animated.Image
            source={jerry}
            style={{ width: 40, height: 50 }} >
          </Animated.Image>
        </TouchableOpacity>
      </View>
      <View
        
        style={{ marginLeft: marginLeft, marginTop: marginTop, width: 40, height: 50 }}>
        <TouchableOpacity>
          <Animated.Image
            source={icon}
            style={{ width: 80, height: 130 }}>
          </Animated.Image>
        </TouchableOpacity>
      </View>
      <View
        style={{ marginLeft: marginLeft2, marginTop: marginTop2, width: 40, height: 50 }}>
        <TouchableOpacity
          onPress={() => onPress}
        >
          <Animated.Image
            source={jerry}
            style={{ width: 40, height: 50 }} >
          </Animated.Image>
        </TouchableOpacity>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  },
});

