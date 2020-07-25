import React, { useContext } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import Color from '../../themes/Color';
import { Button, IconButton } from 'react-native-paper';
import { AuthContext } from '../../navigation/AuthControl/AuthControlNavigator';

const styles = StyleSheet.create({
  title: {
    color: Color.black,
  },
});

interface Props {}

const ActuScreen: React.FC<Props> = () => {
  const { signOut } = useContext(AuthContext);

  const onHandleLogout = () => {
    signOut();
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={styles.title}>Home</Text>
      <Button onPress={onHandleLogout} color={Color.black}>
        Logout
      </Button>
      <IconButton icon="pencil" color={Color.black} />
    </View>
  );
};

export default ActuScreen;
