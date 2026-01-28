import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/navbar";
import Horizontal from "../components/horizontalline";
import ProfileHeader from "../components/ProfileHeader";
import ExpandableText from "../components/ExpandabbleText";

export default function Index()  {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "white",
      }}
    >
      <Navbar filePath={require("../assets/profile.jpg")} />
      <Horizontal />

      <ProfileHeader
        profileImage={require("../assets/p1.jpeg")}
        name="Don Francis"
        title="Software Engineer at TechCorp"
        website="www.donfrancis.dev"
        timePosted="2h ago"
        followConnect="Connect"
      />

      <ExpandableText
          text="Excited to share that I've started a new position as a Software Engineer at TechCorp! Looking forward to this new chapter and the challenges ahead."
          limit={75}
          style={{ paddingHorizontal: 20, fontSize: 14, fontFamily: "Inter-Regular", paddingVertical: 0}}
      />

      {/* <Image
        source={require("../assets/post1.jpg")}
        style={{ width: "100%", height: 200, marginTop: 10, resizeMode: "cover" }}
      /> */}

      {/* <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, borderTopWidth: StyleSheet.hairlineWidth, borderBottomWidth: StyleSheet.hairlineWidth, borderColor: 'gray' }}>
        <TouchableOpacity>
          <Image source={require("../assets/like.png")} style={{ width: 25, height: 25, resizeMode: "contain" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/comment.png")} style={{ width: 25, height: 25, resizeMode: "contain" }} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/share.png")} style={{ width: 25, height: 25, resizeMode: "contain" }} />
        </TouchableOpacity>
      </View> */}


    </SafeAreaView>
  );

};


