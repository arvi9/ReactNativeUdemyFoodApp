import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import "react-native-gesture-handler";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search ",
    },
  }
);

//createAppContainer - So this create app container function essentially creates a default app component or really a react
//component I should say and displays whatever content the navigator is producing inside of that component.
export default createAppContainer(navigator);
