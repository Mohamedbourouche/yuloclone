// App.js

//import Search from './src/components/search'
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from './src/components/search';
import ScannerScreen from './src/views/ScannerScreen';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>On décrypte pour vous, les étiquettes de vos produits !</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={SearchScreen} />
         <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Scanner" component={ScannerScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
/*
export default class App extends React.Component {
  render() {
    return (
      <Search/>
    )
  }
}
*/

/* import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements'

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/views/HomeScreen'
import DetailsScreen from './src/views/DetailScreen'
import ScannerView from './src/views/ScannerScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


function HomeStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}



export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={HomeStack}
                options={{
                    tabBarLabel: 'Produits',
                    tabBarIcon: () => <Icon name="home" size={24} type="Ionicons" />,
                    }}
                />
            <Tab.Screen
                name="Details"
                component={ScannerView}
                options={{
                    tabBarLabel: 'Scanner',
                    tabBarIcon: () => <Icon name="search" size={24} type="Ionicons"  />,
                    }}
                />
        </Tab.Navigator>
    </NavigationContainer>
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
*/
/*
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
*/