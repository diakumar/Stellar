import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator intialRouteName="Home" screenOPtions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component= {HomeScreen}/>
        <Stack.Screen name="DailyPic" component= {DailyPicScreen}/>
        <Stack.Screen name="SpaceCrafts" component= {SpaceCeaftsScreen}/>
        <Stack.Screen name="StarMap" component= {StarMapScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}