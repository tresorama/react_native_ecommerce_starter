import colors from "../../theme/colors";

const stack = {
  screenOptions: {
    headerStyle: {
      backgroundColor: colors.lightgrey,
    },
    headerTintColor: colors.black,
  },
};
const drawer = {
  screenOptions: {
    headerStyle: {
      backgroundColor: colors.lightgrey,
    },
    headerTintColor: colors.black,
  },
};
const tab = {
  screenOptions: {},
  tabBarOptions: {
    inactiveTintColor: colors.white,
    // .... .... .... Label and icon color of the inactive tab item.
    inactiveBackgroundColor: "transparent",
    // .... .... .... Background color of the inactive tab item.
    activeTintColor: colors.lightgrey,
    // .... .... .... Label and icon color of the active tab item.
    activeBackgroundColor: "transparent",
    // .... .... .... Background color of the active tab item.
    // tabStyle: {},
    // .... .... .... Style object for the tab item.
    // showLabel: true,
    // .... .... .... Whether to show label for tab, default is true.
    // labelStyle: {},
    // .... .... .... Style object for the tab label text
    // labelPosition:"below-icon",
    /* .... .... .... 
        Whether the label is rendered below the icon or beside the icon.
        Possible values are: "below-icon" / "beside-icon".
        By default, in vertical orientation (portrait mode), label is rendered below the icon 
        and in horizontal orientation (landscape mode) it's rendered beside the icon. */
    // adaptive: true,
    /* .... .... .... 
        Should the tab icons and labels alignment change based on screen size? Defaults to true.
        If false, tab icons and labels align vertically all the time (labelPosition: 'below-icon').
        When true, tab icons and labels align horizontally on tablets (labelPosition: 'beside-icon').*/
    // allowFontScaling: true,
    // .... .... .... Whether label font should scale to respect Text Size accessibility settings, default is true.
    // keyboardHidesTabBar: false,
    // .... .... .... Whether the tab bar is hidden when the keyboard opens. Defaults to false.
    // safeAreaInsets: {},
    /* .... .... .... 
        Safe area insets for the screen. This is used to avoid elements like notch and system navigation bar.
        By default, the device's safe area insets are automatically detected.
        You can override the behavior with this option.
        Takes an object containing following optional properties:
        {
          top: <Number> The value of the top inset, e.g. area containing the status bar and notch.
          right: <Number> The value of the left inset.
          bottom: <Number> The value of the bottom inset, e.g. area navigation bar on bottom.
          left: <Number> The value of the right inset.
        }*/
    style: {
      height: 100,
      backgroundColor: colors.black,
    },
    /* .... .... .... 
        Style object for the tab bar.
        You can configure styles such as background color here.
        
        To show your screen under the tab bar, you can set the position style to absolute, like this:
        { position: 'absolute' }
        
        You also might need to add a bottom margin to your content if you have a absolutely positioned tab bar.
        React Navigation won't do it automatically.
        
        To get the height of the bottom tab bar,
        you can use BottomTabBarHeightContext (case 1) with React's Context API or useBottomTabBarHeight (case 2):
        
        (case 1) - CODE :
        import { BottomTabBarHeightContext } from '@react-navigation/bottom-tabs';
        // ...
        <BottomTabBarHeightContext.Consumer>
        {tabBarHeight => (
          // render something ... 
        )}
        </BottomTabBarHeightContext.Consumer>
        
        (case 2) - CODE :
        import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
        // ...
        const tabBarHeight = useBottomTabBarHeight();
        */
  },
};
export default {
  stack,
  drawer,
  tab,
};
