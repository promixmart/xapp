import React, {useState} from 'react';
import {
  StyleSheet,
  useColorScheme,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import {UserApi} from '../../lib/api/User';

import Button from '../../components/Button';
import {AuthContext} from '../../context/authContext';
import {store} from '../../Redux/store';
import {loginAction} from '../../Redux/Auth/actions';
import {addUser} from '../../Redux/User/action';
import {useDispatch} from 'react-redux';
import EditTextWithIcon from './EditTextWithIcon';
import ButtonWithProgress from './ButtonWithProgress';
import {strings_eng} from '../../constants/Strings';
import {CommonActions} from '@react-navigation/native';
import {toastMessage} from '../../constants/Functions';
import {colors_dark, colors_light} from '../../constants/Colors';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicon from 'react-native-vector-icons/dist/Ionicons';

const SignUp = ({navigation}) => {
    const isDarkMode = useColorScheme() === 'dark';

  if (store.getState().auth.currentUser.sessionToken) {
    // Navigate to home menu
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
    //return empty view
    return null;
  }
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  


  const login = async () => {
    setLoading(true);
    const user = await UserApi.registerNewUser(username, password, email, confirm_password, gender);
    console.log(JSON.stringify(user));
    if (user.error || !user.sessionToken) {
      setLoading(false);
      toastMessage(JSON.stringify(user.error));
      return;
    }

    dispatch(
      loginAction({sessionToken: user.sessionToken, objectId: user.objectId}),
    );
    dispatch(addUser(user));
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Home'}],
      }),
    );
  };

  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: isDarkMode
          ? colors_dark.backgroundColor
          : colors_light.backgroundColor,
      }}>
      <View
        style={{
          padding: 5,
          borderRadius: 15,
          alignItems: 'center',
          justifyContent: 'center',
          width: '95%',
        }}>
        <EditTextWithIcon
          value={username}
          setValue={setUsername}
          borderRadius={15}
          icon={
            isDarkMode ? (
              <Entypo name="user" size={25} color="white" />
            ) : (
              <Entypo name="user" size={25} color="black" />
            )
          }
          style={{width: '95%', marginTop: 10}}
          placeholder={strings_eng.username}
          fontSize={16}
          textColor={
            isDarkMode ? colors_dark.textColor : colors_light.textColor
          }
          isPassword={false}
        />

        <EditTextWithIcon
          value={email}
          setValue={setEmail}
          borderRadius={15}
          icon={
            isDarkMode ? (
              <Entypo name="email" size={25} color="white" />
            ) : (
              <Entypo name="email" size={25} color="black" />
            )
          }
          style={{width: '95%', marginTop: 10}}
          placeholder={"Email"}
          fontSize={16}
          textColor={
            isDarkMode ? colors_dark.textColor : colors_light.textColor
          }
          isPassword={false}
        />

        <EditTextWithIcon
          value={password}
          setValue={setPassword}
          borderRadius={15}
          icon={
            isDarkMode ? (
              <Ionicon name="key" size={25} color="white" />
            ) : (
              <Ionicon name="key" size={25} color="black" />
            )
          }
          style={{width: '95%', marginTop: 10}}
          placeholder={strings_eng.password}
          fontSize={16}
          textColor={
            isDarkMode ? colors_dark.textColor : colors_light.textColor
          }
          isPassword={true}
        />

        <EditTextWithIcon
          value={confirm_password}
          setValue={setConfirm_password}
          borderRadius={15}
          icon={
            isDarkMode ? (
              <Ionicon name="key" size={25} color="white" />
            ) : (
              <Ionicon name="key" size={25} color="black" />
            )
          }
          style={{width: '95%', marginTop: 10}}
          placeholder={'confirm password'}
          fontSize={16}
          textColor={
            isDarkMode ? colors_dark.textColor : colors_light.textColor
          }
          isPassword={true}
        />

        <ButtonWithProgress
          style={{
            width: '95%',
            height: 50,
            marginTop: 10,
            marginBottom: 10,
            borderRadius: 15,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors_dark.blue,
          }}
          underlayColor={'#98cbfa'}
          onPress={login}
          showProgress={loading}
          textStyle={{
            color: 'white',
            fontWeight: 'bold',
          }}
          progressColor={'white'}
          buttonText={strings_eng.login}
        />
        
        
      </View>
    </View>
  );
};


export default SignUp;
