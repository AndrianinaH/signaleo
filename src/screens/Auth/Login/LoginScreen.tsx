import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Color from '../../../themes/Color';
import { Button } from 'react-native-paper';
import { AuthContext } from '../../../navigation/AuthControl/AuthControlNavigator';

const styles = StyleSheet.create({
  title: {
    color: Color.black,
  },
});

interface Props {}

const LoginScreen: React.FC<Props> = () => {
  const { signIn } = useContext(AuthContext);
  // --- handler
  const onHandleLogin = () => {
    signIn({ email: 'dda', pwd: 'sasa' });
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Login</Text>
      <Button onPress={onHandleLogin}>Connexion</Button>
    </View>
  );
};

export default LoginScreen;
