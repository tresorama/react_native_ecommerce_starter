import React, { useState, useContext } from "react";
import { Text } from "react-native";
import { Container, Content, Button, Form, Item, Input, Label } from "native-base";

// GLOBAL STATE ...
import AuthContext from "../AppContext/AuthContext";
// SCREENS ...
import ScreenBlank from "./ScreenBlank";
// COMPONENTS ...
import AppTextInput from "../components/AppTextInput";
import LoadingSignal from "../components/LoadingSignal";

const ScreenLogin = ({ navigation }) => {
  // get user from AuthContext ...
  const { user, login, isValidating } = useContext(AuthContext);

  // local state ....
  const [loginFailed, setLoginFailed] = useState(false);
  const [fields, setFields] = useState({
    email: null,
    passsword: null,
  });

  // listener launched when user try to login after completed form fields ...
  const handleSubmit = async () => {
    const loggedIn = await login(fields);
    if (!loggedIn) {
      // login failed ...
      // so say that is failed to this component to notify user ...
      return setLoginFailed(true);
    }
    // login succeded ...
    // navigate to "AppStack" so will be visible the last page visited...
    navigation.navigate("App");
  };

  return (
    <ScreenBlank>
      {isValidating && <LoadingSignal />}
      {!isValidating && (
        <>
          {/* LOGIN FAILED STATUS */}
          {loginFailed && <Text>LOGIN FAILED , RETRY</Text>}
          {/* USER IS LOGGED STATUS */}
          <Text>User Logged : {user ? "true" : "false"}</Text>
          {/* FORM  */}
          <Container>
            <Content>
              <Form>
                <Item floatingLabel>
                  <Label>Email</Label>
                  <Input onChangeText={(text) => setFields({ ...fields, email: text })} />
                </Item>
                <Item floatingLabel last>
                  <Label>Password</Label>
                  <Input
                    secureTextEntry
                    onChangeText={(text) => setFields({ ...fields, password: text })}
                  />
                </Item>
                <Button block style={{ marginTop: 50 }} onPress={handleSubmit}>
                  <Text>Login</Text>
                </Button>
              </Form>
            </Content>
          </Container>
        </>
      )}
      <AppTextInput placeholder={"Email"} />
      <AppTextInput placeholder={"Password"} />
    </ScreenBlank>
  );
};
export default ScreenLogin;
