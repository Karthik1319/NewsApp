import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';

const ProfileScreen = () => {
    return (
      <View style={styles.container}>
        <Image
          source={require('../assets/man.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.name}>@darian_rosebrook</Text>
        
        <Text style={styles.email}>
          📧 Email: <Text style={styles.highlightText}>rosebrook0718@gmail.com</Text>
        </Text>

        <Text style={styles.mobile}>
          📱 Mobile: <Text style={styles.highlightText}>+919898273051</Text>
        </Text>

        <Text style={styles.dob}>
          🎂 Born on: <Text style={styles.highlightText}>12/05/1995</Text>
        </Text>

        <View style={styles.bioContainer}>
            <Text style={styles.bioHighlight}>Here are a few things about me:</Text>
            <Text style={styles.bioText}>🌟 Enthusiastic Developer</Text>
            <Text style={styles.bioText}>🌍 Avid Traveler</Text>
            <Text style={styles.bioText}>📚 Lifelong Learner</Text>
            <Text
            style={styles.bioLink}
            onPress={() => Linking.openURL('https://darianrosebrook.com/')}
            >
            🌐 Visit my website
            </Text>
        </View>
      </View>
    );
};
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      backgroundColor: '#e0f7fa'
    },
    profilePicture: {
      width: 150,
      height: 150,
      borderRadius: 75,
      marginBottom: 20,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    email: {
      fontSize: 15,
      color: '#555',
      marginBottom: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    mobile: {
      fontSize: 15,
      color: '#555',
      marginBottom: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    dob: {
      fontSize: 15,
      color: '#555',
      marginBottom: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    highlightText: {
      fontWeight: 'bold',
      color: '#007bff', 
    },
    bioContainer: {
      backgroundColor: '#f0f0f0',
      borderRadius: 10,
      padding: 15,
      alignItems: 'center',
      marginTop: 20,
    },
    bioHighlight: {
      fontSize: 16,
      color: '#007bff',
      fontWeight: 'bold',
      marginBottom: 5,
    },
    bioText: {
      fontSize: 16,
      color: '#555',
      marginBottom: 5,
    },
    bioLink: {
      fontSize: 16,
      color: '#007bff',
      textDecorationLine: 'underline',
      marginTop: 10,
    },
});

export default ProfileScreen;
