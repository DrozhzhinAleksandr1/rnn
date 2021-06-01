import React, { forwardRef, useRef } from "react";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { createCompatNavigatorFactory } from "@react-navigation/compat";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import CollapsibleFooter from "components/CollapsibleFooter";

import { useNavigation, useRoute } from "@react-navigation/native";

import {
  //   ArticlesNavigation,
  PhotosNavigation,
  AboutNavigation,
  VideosNavigation,
  RaceHubNavigation,
  WebViewNavigation,
  SearchNavigation,
  PlusNavigation,
} from "screens";

const BS = ({ navigation }: { navigation: any }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "gray",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.push("Article", {
            id: 1,
          });
        }}
      >
        <Text>Go to article</Text>
      </TouchableOpacity>
    </View>
  );
};

const AS = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const id = useRef(route?.params?.id ? route?.params?.id + 1 : 1);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: id.current % 2 === 0 ? "orange" : "green",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          navigation.push("Article", {
            id: id.current,
          });
        }}
      >
        <Text>Go to next article {id.current}</Text>
      </TouchableOpacity>
    </View>
  );
};

const ArticlesNavigation = createCompatNavigatorFactory(createStackNavigator)(
  {
    Articles: BS,
    Article: AS,
    //   ...detailScreens,
  },
  {
    mode: "card",
    headerMode: "none",
    defaultNavigationOptions: {
      // if animation enabled and in screen present webview well be crash app
      animationEnabled: false,
    },
  }
);

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator tabBar={(props) => <CollapsibleFooter {...props} />}>
      <Tab.Screen name="Articles" component={ArticlesNavigation} />
      {/* <Tab.Screen name="Plus" component={PlusNavigation} />
      <Tab.Screen name="PhotoGalleries" component={PhotosNavigation} />
      <Tab.Screen name="Videos" component={VideosNavigation} /> */}
      <Tab.Screen name="RaceHub" component={RaceHubNavigation} />
    </Tab.Navigator>
  );
}

const MenuNavigation = createCompatNavigatorFactory(createStackNavigator)(
  {
    Main: { screen: TabNavigator },
    // About: { screen: AboutNavigation },
    // WebView: {
    //   screen: WebViewNavigation,
    //   navigationOptions: { animationEnabled: false },
    // },
  },
  {
    mode: "card",
    headerMode: "none",
  }
);

const RootNavigation = createCompatNavigatorFactory(createStackNavigator)(
  {
    Home: { screen: MenuNavigation },
    Search: { screen: SearchNavigation },
  },
  {
    mode: "card",
    headerMode: "none",
  }
);

const NavigationComponent = forwardRef((props: any, ref: any) => {
  const { onNavigationStateChange } = props;

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer
        onStateChange={onNavigationStateChange}
        ref={ref}
        {...props}
      >
        <RootNavigation />
      </NavigationContainer>
    </View>
  );
});

export default NavigationComponent;
