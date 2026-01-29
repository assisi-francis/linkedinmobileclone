import { Text, View, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";
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

      <ScrollView showsVerticalScrollIndicator={false}>
      
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
          likes='100'
          comments='150'
          reposts='50'
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

        <ProfileHeader
          profileImage={require("../assets/p2.jpeg")}
          name="John James"
          title="Electrical Electronics Engineer at ElectroWorks"
          website="www.electroworks.com"
          timePosted="3h ago"
          followConnect="Connect"
        />

        <ExpandableText
            text="Excited to share that I've started a new position as a Software Engineer at TechCorp! Looking forward to this new chapter and the challenges ahead."
            limit={75}
            style={{ paddingHorizontal: 20, fontSize: 14, fontFamily: "Inter-Regular", paddingVertical: 0}}
        />

        <PostImage
          source={require("../assets/post1.jpg")}
        />

        <PostStats 
          likes='300'
          comments='50'
          reposts='200'
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

        <ProfileHeader
          profileImage={require("../assets/p3.jpeg")}
          name="Daniel Blessing Smith"
          title="Content Writer at WriteWell"
          website="www.writewell.dev"
          timePosted="4h ago"
          followConnect="Follow"
        />

        <ExpandableText
            text="Excited to share that I've started a new position as a Software Engineer at TechCorp! Looking forward to this new chapter and the challenges ahead."
            limit={75}
            style={{ paddingHorizontal: 20, fontSize: 14, fontFamily: "Inter-Regular", paddingVertical: 0}}
        />

        <PostImage
          source={require("../assets/post2.jpg")}
        />

        <PostStats 
          likes='370'
          comments='110'
          reposts='70'
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


        <ProfileHeader
          profileImage={require("../assets/p4.jpeg")}
          name="Sunday Williams"
          title="Estate Agent at HomeFinders"
          website="www.homefinders.net"
          timePosted="5h ago"
          followConnect="Connect"
        />

        <ExpandableText
            text="Excited to share that I've started a new position as a Software Engineer at TechCorp! Looking forward to this new chapter and the challenges ahead."
            limit={75}
            style={{ paddingHorizontal: 20, fontSize: 14, fontFamily: "Inter-Regular", paddingVertical: 0}}
        />

        <PostImage
          source={require("../assets/gem1.png")}
        />

        <PostStats 
          likes='400'
          comments='90'
          reposts='440'
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

          <ProfileHeader
          profileImage={require("../assets/p5.jpeg")}
          name="Jimmy Khabby"
          title="Digital Marketer at MarketPros"
          website="www.marketpros.com"
          timePosted="6h ago"
          followConnect="Follow"
        />

        <ExpandableText
            text="Excited to share that I've started a new position as a Software Engineer at TechCorp! Looking forward to this new chapter and the challenges ahead."
            limit={75}
            style={{ paddingHorizontal: 20, fontSize: 14, fontFamily: "Inter-Regular", paddingVertical: 0}}
        />

        <PostImage
          source={require("../assets/gem2.png")}
        />

        <PostStats 
          likes='10'
          comments='80'
          reposts='550'
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


      </ScrollView>

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


