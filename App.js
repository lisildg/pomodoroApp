import { StyleSheet, Text, View, Platform, SafeAreaView, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import { Audio } from "expo-av";

const colors =["#F7DC6F", "#A2D9CE", "#D7BDE2"];

export default function App() {
  const [isWorking, setIsWorking]= useState(false);
  const [time, setTime] = useState(25*60);
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" | "BREAK");
  const [isActive, setIsActive] = useState(false);

  function handleStartStop() {
    setIsActive(!isActive);
  }

  function handleStartStop() {
    playSound();
    setIsActive(!isActive);
  }

  // function playSound() {
  //   const {sound } = await Audio.Sound.createAsync(
  //     require("./assets/start.mp3")
  //     )
  //   await sound.playAsync();
  // }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: colors[currentTime]} ]}>
    <View style={{
      flex: 1,
      paddingHorizontal: 15, 
      paddingTop: Platform.OS === "android" && 30, 
      }}>
      <Text style={styles.texto}>pomodoro</Text>
      <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
      <Timer time={time} />
      <TouchableOpacity onPress={handleStartStop} style={styles.button} >
        <Text>
          {isActive ? "STOP" : "START"}
        </Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    border:'#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto:{
    fontSize: 37,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 15,
  }
});
