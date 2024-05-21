import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from 'react-native';
import FirebaseAuth from './components/firebaseAuth';
import RouteMap from './components/RouteMap';
import Profile from './components/Profile';
import { AuthProvider, AuthContext } from './components/AuthContext';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};


const StackNavigator = () => {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator>
      {user ? (
        <Stack.Screen name="Home" component={TabNavigator} options={{ headerShown: false }} />
      ) : (
        <Stack.Screen name="Auth" component={FirebaseAuth} options={{ headerShown: false }} />
      )}
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  const { handleSignOut } = useContext(AuthContext);

  return (
    <Tab.Navigator>
      <Tab.Screen name="RouteMap" component={RouteMap} options={{
        headerRight: () => (
          <Button
            onPress={handleSignOut}
            title="Logout"
            color="#e74c3c"
          />
        ),
      }}/>
      <Tab.Screen name="Profile" component={Profile} options={{
        headerRight: () => (
          <Button
            onPress={handleSignOut}
            title="Logout"
            color="#e74c3c"
          />
        ),
      }} />
    </Tab.Navigator>
  );
};

export default App;
