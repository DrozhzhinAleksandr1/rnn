
import App from './App';
import {name as Appname} from './app.json';
import { Navigation } from "react-native-navigation";

Navigation.registerComponent(Appname, () => App );

Navigation.events().registerAppLaunchedListener(() => {
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: Appname
             }
           }
         ]
       }
     }
  });
});