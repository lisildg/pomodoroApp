import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const options = ["Pomodoro", "Short Break", "Long Break"]

export default function Header({currentTime,setCurrentTime ,setTime}) {

    function handlePress(index){
        const newTime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newTime * 60);
    }

    return(
    <View style={{ flexDirection: "row"}}>
        {options.map((item, index)=>(
            <TouchableOpacity 
            key={index} 
            onPress={() => handlePress(index)} 
            style={[styles.itemsStyle, currentTime !== index && {borderColor: "transparent"},]}
            >
                <Text>{item}</Text>
            </TouchableOpacity>
        ))}
        
    </View>
    )
}

const styles = StyleSheet.create({
    itemsStyle: {
        width: "33%",
        borderWidth: 3,
        padding: 5,
    }
})