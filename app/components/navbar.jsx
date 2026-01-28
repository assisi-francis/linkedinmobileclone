import { Image, View, TextInput, StyleSheet } from "react-native";


const Navbar = ({filePath})=>{
    
    return(
    <>
        <View style={{flexDirection: 'row', padding: 20, alignItems: 'left', justifyContent: 'space-evenly'}}>
            <Image source={filePath} style={{width: 40, height: 40, borderRadius: 75, resizeMode: 'cover', marginRight: 10}} />
            
            <View style={{flexDirection: 'row',flex: 1, alignContent: 'center', alignItems: 'center', borderColor: 'black', borderWidth: 0.3, borderRadius: 40, }}>
            <Image source={require("../assets/search.png")} style={{width: 30, height: 25, marginLeft: 10, resizeMode: 'contain', alignContent: 'center'}} />
            <TextInput placeholder="Search" style={{width: 200, fontSize: 16, color: "#000", paddingHorizontal: 5}} />
            </View>
            <View style={{width: 40, height: 40, alignContent: 'center', justifyContent: 'center'}}>
            <Image source={require("../assets/chat.png")} style={{width: 30, height: 30, alignSelf: 'center'}} />
            </View>
      </View>

    </>
    )
};

export default Navbar;
