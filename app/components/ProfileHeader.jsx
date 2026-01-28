import {View, Text, Image} from "react-native";


const ProfileHeader = ({profileImage, name, title, website, timePosted, followConnect="Follow"}) => {
    return (
        <View style={{flexDirection: 'row', padding: 20, alignItems: 'left', justifyContent: 'space-evenly', margin: -4}}>
            <Image source={profileImage} style={{width: 60, height: 60, borderRadius: 30, resizeMode: 'contain', marginRight: 10}} />
            <View style={{flexDirection: 'column', alignContent: 'center', alignItems: 'flex-start'}}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, fontFamily: 'Inter-SemiBold'}}>{name}</Text>
              <Text style={{ fontSize: 10, color: 'gray', fontFamily: 'Inter-Regular'}}>{title} ...</Text>
              <Text style={{ fontSize: 10, color: 'gray', fontFamily: 'Inter-Regular', color: '#0A66C2'}}>{website}</Text>
              
              <View style={{flexDirection: 'row', marginTop: 2, alignItems: 'center'}}>
                <Text style={{ fontSize: 10, color: 'gray', fontFamily: 'Inter-Regular'}}>{timePosted} . </Text>
                <Image source={require("../assets/earth.png")} style={{width: 10, height: 10, resizeMode: 'contain', marginHorizontal: 2}} />
              </View>
            </View>

            <View style={{flexDirection:'row', marginTop: 0, paddingBottom: 27, alignItems: 'center', justifyContent: 'space-evenly', paddingHorizontal: 10, paddingVertical: 10}}>
              <Image source={require("../assets/add.png")} style={{width: 16, height: 16, resizeMode: 'contain'}}/>
              <Text style={{ fontSize: 16, color: '#0A66C2', fontFamily: 'Inter-Bold', marginTop: 2}}>  {followConnect}</Text>
            </View>
            
        </View>
    );
}

export default ProfileHeader;