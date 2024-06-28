import { Text, View , Image} from "react-native";

export default function Index() {
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    }}
    >
      <Image source={require('../assets/images/react-logo.png')}/>
      <Image 
      style={{width:300,
        height:300,
      borderRadius:300}}
      source={require('../assets/images/02.png')}/>
      
      <Text>Primeiro App React-Native.</Text>
      <Text>Meu nome é Anderson.</Text>
      <Text>e eu curso senac.</Text>
    </View>
  );
}

