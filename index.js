import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

const HomeScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Hello React Native Navigation 👋</Text>

      <Button
        title='Push Settings Screen'
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Settings'
          }
        })} />
    </View>
  );
};
HomeScreen.options = {
  topBar: {
    title: {
      text: 'Home'
    }
  },
  bottomTab: {
    text: 'Home'
  }
};

const SettingsScreen = (props) => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>

      <Button
        title={`Push Settings Screen ${props.componentId}`}
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Settings2'
          }
        })} />
    </View>
  );
}
SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Settings'
    }
  },
  bottomTab: {
    text: 'Settings'
  }
}

const SettingsScreen2 = (props) => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen2</Text>

      <Button
        title={`Push Settings Screen2 ${props.componentId}`}
        color='#710ce3'
        onPress={() => Navigation.push(props.componentId, {
          component: {
            name: 'Settings'
          }
        })} />
    </View>
  );
}
SettingsScreen2.options = {
  topBar: {
    title: {
      text: 'Settings2'
    }
  },
  bottomTab: {
    text: 'Settings2'
  }
}

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);
Navigation.registerComponent('Settings2', () => SettingsScreen2);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: '#4d089a'
  },
  topBar: {
    title: {
      color: 'white'
    },
    backButton: {
      color: 'white'
    },
    background: {
      color: '#4d089a'
    }
  },
  bottomTab: {
    fontSize: 14,
    selectedFontSize: 14
  }
});

Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home'
                  }
                },
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Settings'
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });
});

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke'
  }
});



// import App from './App';
// import {name as Appname} from './app.json';
// import { Navigation } from "react-native-navigation";

// Navigation.registerComponent(Appname, () => App );

// Navigation.events().registerAppLaunchedListener(() => {
//    Navigation.setRoot({
//      root: {
//        stack: {
//          children: [
//            {
//              component: {
//                name: Appname
//              }
//            }
//          ]
//        }
//      }
//   });
// });