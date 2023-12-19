import * as React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen(props) {
  const handlePress = () => {
    props.navigation.navigate('DetailModal', { screen: 'Detail2', initial: false });
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={handlePress}>
        <Text style={{ color: 'blue' }}>Navigate to Detail2</Text>
      </TouchableOpacity>
    </View>
  );
}


const Detail1Screen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail1 Screen</Text>
    </View>
  );
};

const Detail2Screen = (props) => {
  React.useLayoutEffect(() => {
    props.navigation.setOptions({
      title: 'foo',
      headerRight: () => <Text>Bar</Text>,
    });
  }, [props.navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Detail2 Screen</Text>
    </View>
  );
};

const DetailStack = createStackNavigator();

function DetailModal() {
  return (
    <DetailStack.Navigator>
      <DetailStack.Screen name="Detail1" component={Detail1Screen} />
      <DetailStack.Screen name="Detail2" component={Detail2Screen} />
    </DetailStack.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DetailModal" component={DetailModal} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
