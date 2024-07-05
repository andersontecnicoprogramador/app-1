
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";


export default function Index() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor:"#98fb98",
    }}
>
     
     <Image       
      style={{ width: 300, 
        height: 300, 
        borderRadius: 300 
      }}
      source={require('../assets/images/card-01.png')} 
      />
      
      <Text style={{ fontSize:18
      }}>Pés sem dor</Text>

     
<Link href="/products" style={styles.button}asChild>
        <TouchableOpacity >

          <Text style={styles.buttonText}>
            Entre no App Pés sem dor
          </Text>

        </TouchableOpacity>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({

  button: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    margin: 20,
    backgroundColor: '#FFFF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,

  },
  buttonText: {
    fontSize: 18,
    color: '#010101',
    fontWeight: 'bold',
  },
});

