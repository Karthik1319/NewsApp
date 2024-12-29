import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, createStaticNavigation, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import ProfileScreen from './screens/ProfileScreen';
import SearchScreen from './screens/SearchScreen';
import SavedScreen from './screens/SavedScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={({ navigation }) => ({
          headerTitle: "NewsApp",
          headerStyle: {
            backgroundColor: '#f5f5f5', 
            shadowColor: '#ccc', 
            elevation: 2, 
          },
          headerTintColor: '#333', 
          headerTitleStyle: {
            fontSize: 23,
            fontWeight: '500',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 1, flexDirection: 'row', alignItems: 'center' }}
            >
              <Icon
                name="arrow-back-circle-outline" 
                size={30}
                color="#333"
                style={{ marginRight: 80 }}
              />
            </TouchableOpacity>
          ),
        })}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }) => ({
          headerTitle: 'NewsApp',
          headerStyle: {
            backgroundColor: '#f5f5f5',
            shadowColor: '#ccc',
            elevation: 2,
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontSize: 25,
            fontWeight: '500',
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.headerButton}
            >
              <Icon
                name="arrow-back-circle-outline"
                size={30}
                color="#333"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => alert('Edit Profile')}
              style={styles.headerButton}
            >
              <Icon
                name="create-outline"
                size={30}
                color="#333"
              />
            </TouchableOpacity>
          ),
          headerTitleAlign: 'center',
          header: () => (
            <View style={styles.headerContainer}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={styles.headerButton}
              >
                <Icon
                  name="arrow-back-circle-outline"
                  size={35}
                  color="#333"
                />
              </TouchableOpacity>
              <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>NewsApp</Text>
                <Text style={styles.headerSubtitle}>Welcome to your Profile!</Text>
              </View>
              <TouchableOpacity
                onPress={() => alert('Edit Profile')}
                style={styles.headerButton}
              >
                <Icon
                  name="create-outline"
                  size={30}
                  color="#333"
                />
              </TouchableOpacity>
            </View>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    backgroundColor: '#e0f7fa',
    height: 60,
    marginTop: 40,
  },
  headerButton: {
    paddingHorizontal: 10,
  },
  headerTitleContainer: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '500',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#555',
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Saved') {
              iconName = focused ? 'bookmark' : 'bookmark-outline';
            }

            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007BFF',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Saved" component={SavedScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}