import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaFrameContext, SafeAreaView } from "react-native-safe-area-context";
import Navbar from "../components/navbar";
import Horizontal from "../components/horizontalline";
import ProfileHeader from "../components/ProfileHeader";
import ExpandableText from "../components/ExpandabbleText";
import PostStats from "../components/PostStats";
import PostImage from "../components/PostImage";
import ActionButton from "../components/ActionButton";

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

      <PostImage
        source={require("../assets/p1.jpeg")}
      />

      <PostStats 
        likes='300'
        comments='50'
        reposts='500'
        icon={require("../assets/response.jpg")}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-around", paddingVertical: 15, borderTopWidth: 1, borderTopColor: "#eee"   }}>
        <ActionButton
          icon={require("../assets/like.png")}
          label="Like"
          onPress={() => console.log("Like button pressed")}
        />
        <ActionButton
          icon={require("../assets/comment.png")}
          label="Comment"
          onPress={() => console.log("Comment button pressed")}
        />
        <ActionButton
          icon={require("../assets/repost.png")}
          label="Repost"
          onPress={() => console.log("Repost button pressed")}
        />
        <ActionButton
          icon={require("../assets/send.png")}
          label="Share"
          onPress={() => console.log("Share button pressed")}
        />
      </View>

      <Horizontal />

      <View style={{ flexDirection: "row", alignItems: "center", padding: 15, justifyContent: "space-around" }}>
        <ActionButton
          icon={require("../assets/home.png")}
          label="Home"
          onPress={() => console.log("home button pressed")}
          iconSize={25}
        />
        <ActionButton
          icon={require("../assets/network.png")}
          label="My Network"
          onPress={() => console.log("network button pressed")}
          iconSize={25}
        />
        <ActionButton
          icon={require("../assets/post.png")}
          label="Post"
          onPress={() => console.log("jobs button pressed")}
          iconSize={25}
        />
        <ActionButton
          icon={require("../assets/notification.png")}
          label="Notifications"
          onPress={() => console.log("notification button pressed")}
          iconSize={25}
        />
        <ActionButton
          icon={require("../assets/job.png")}
          label="Jobs"
          onPress={() => console.log("notifications button pressed")}
          iconSize={25}
        />  


      </View>


    </SafeAreaView>
  );

};


