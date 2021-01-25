import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";

// GLOBAL STATE...
import AuthContext from "./app/AppContext/AuthContext";
import StoreContext from "./app/AppContext/StoreContext";
// HOOKS ...
import usePersistentData from "./app/hooks/usePersistentData";
import useAuth from "./app/hooks/useAuth";
// NAVIGATION
import { enableScreens } from "react-native-screens";
enableScreens(); // Before rendering any navigation stack
import { NavigationContainer } from "@react-navigation/native";
import RootStack from "./app/navigation/RootStack";
// NAVIGATORS DEFAULT THEME...
import DefaultTheme from "./app/navigation/theme/DefaultTheme";
// SCREENS ...
import ScreenSplash from "./app/screens/ScreenSplash";

// START !

const App = () => {
  // isReady        =>          local state.
  //                            while loading initial stuff, stay FALSE ...
  const [isReady, setIsReady] = useState(false);

  // _useAuth       =>          local state, with custom React Hook.
  //                            will be passed to "AuthContext" ...
  //                            CONTAINS :
  //                                { user[object], login[f], logout[f], recoverUserFromPreviousTime[f] }
  //                            USAGE IN OTHER SUB COMPONENT:
  //                                const { user, ... } = useContext(AuthContext);
  //
  //  IMPORTANT                 NEVER RECALL THE HOOK , must be used only once in whole APP.
  const _useAuth = useAuth();

  // _usePersistentData =>      local state, with custom React Hook.
  //                            will be passed to "StoreContext" ...
  //                            CONTAINS :
  //                                { products_store[array], taxonomises_store[array], ... }
  //                            USAGE IN OTHER SUB COMPONENT:
  //                                const { products_store, ... } = useContext(StoreContext);
  //
  //  IMPORTANT                 NEVER RECALL THE HOOK , must be used only once in whole APP.
  const _usePersistentData = usePersistentData();

  // ASYNC ACTION ->  do any initilization here!!
  //                  Will be launched from the SplashScreen and
  //                  after it complete "isReady" will be set to TRUE
  const onFirstLoading = async () => {
    await _useAuth.recoverUserFromPreviousTime();
    await _usePersistentData.fetchData();
  };

  if (!isReady)
    // from start, until "isReady" (local state var) is FALSE show SplashScreen, ...
    return (
      <ScreenSplash
        startAsync={onFirstLoading} //ASYNC ACTION -> do any initilization here!!
        onFinish={() => setIsReady(true)} //after it complete "isReady" will be set to TRUE
        onError={(err) => console.warn(err)} // DA_FARE
      />
    );

  // when "isReady" is TRUE render RootStack ( that is the entry point that render navigators )
  return (
    <AuthContext.Provider value={_useAuth}>
      <StoreContext.Provider value={_usePersistentData}>
        <NavigationContainer theme={DefaultTheme}>
          <RootStack />
        </NavigationContainer>
        <StatusBar />
      </StoreContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
