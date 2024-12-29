import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SavedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
          <Icon name="arrow-back-circle-outline" size={30} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>NewsApp</Text>
        <TouchableOpacity onPress={() => alert('Saved Icon Pressed')} style={styles.iconButton}>
          <Icon name="bookmark-outline" size={30} color="#333" />
        </TouchableOpacity>
      </View>

      {/* Main content */}
      <View style={styles.content}>
        <Icon name="bookmarks-outline" size={50} color="#555" style={styles.icon} />
        <Text style={styles.text}>No saved articles yet!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4', 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  iconButton: {
    paddingHorizontal: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  icon: {
    marginBottom: 20,
  },
  text: {
    fontSize: 18,
    color: '#555',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default SavedScreen;
