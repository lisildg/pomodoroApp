import { View, Text, StyleSheet } from "react-native";

export default function Timer({time}){

    const formattedTime = `${Math.floor(time / 60).toString().padStart(2, "0")}:${(time % 60)}`;
return (
    <View style={ styles.container}>
        <Text style={styles.time}>{formattedTime}</Text>
    </View>
);
}

const styles = StyleSheet.create({
container:{
    felx: 0.3,
    justifyContent: "center",
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 15 ,
},
time: {
    fontSize:80,
    fontWeight: "bold",
    textAlign: "center",
}
})