import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import articlesData from '../data/articles.json';

const HomeScreen = () => {
    const categories = [
        "Technology",
        "Sports",
        "Politics",
        "Health",
        "Business",
        "Entertainment",
    ];
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [articles, setArticles] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    setArticles(articlesData.articles);
  }, []);

  const renderCategoryButtons = () => (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.categoryContainer}
    >
      {categories.map((category, index) => (
        <TouchableOpacity
          key={index}
          style={[styles.categoryButton, selectedCategory === category && styles.selectedCategory]}
          onPress={() => setSelectedCategory(category)}
        >
          <Text style={[styles.categoryText, selectedCategory === category && styles.selectedCategoryText]}>{category}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );

  const renderArticleItem = ({ item }) => {
    const calculateTimeAgo = (publishedAt) => {
      const publishedDate = new Date(publishedAt);
      const currentDate = new Date();
      const differenceInSeconds = Math.floor((currentDate - publishedDate) / 1000);

      const minutes = Math.floor(differenceInSeconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
      } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
      } else if (minutes > 0) {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
      } else {
        return `Just now`;
      }
    };

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Detail', { article: item })}>
        <View style={styles.articleContainer}>
          <Image source={{ uri: item.urlToImage }} style={styles.articleImage} />
          <Text style={styles.articleTitle}>{item.title}</Text>
          <Text style={styles.articleAuthor}>{item.author}</Text>
          <Text style={styles.articleTime}>{calculateTimeAgo(item.publishedAt)}</Text> 
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
            <Text style={styles.headerTitle}>News App</Text>
            <Text style={styles.subHeading}>Stay Informed. Stay Connected</Text>
        </View>
        <TouchableOpacity
            style={styles.profileButton}
            onPress={() => navigation.navigate('Profile')}
        >
            <Image source={require('../assets/man.png')} style={styles.profileImage} />
        </TouchableOpacity>
      </View>
      {renderCategoryButtons()}
      <FlatList
        data={articles}
        renderItem={renderArticleItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#f5f5f5',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 30,
    },
    headerTitle: {
      fontSize: 45,
      fontWeight: 'bold',
      color: '#333',
    },
    subHeading: {
        fontSize: 14,
        fontWeight: '400',
        color: '#555',
        textAlign: 'right'
    },
    profileButton: {
        borderRadius: 40,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5DADE2',
        borderWidth: 2, 
        borderColor: '#2980b9',
        shadowColor: '#2980b9',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        elevation: 6, 
        transition: 'all 0.3s ease-in-out', 
    },
    profileImage: {
      width: '100%',
      height: '100%',
      borderRadius: 35, 
    },
    categoryContainer: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
      alignItems: 'center',
      paddingVertical: 5,
      marginTop: 20,
      marginBottom: 30,
      borderBottomWidth: 1,
      borderColor: '#333',
    },
    categoryButton: {
      height: 40,
      paddingHorizontal: 15,
      borderWidth: 1,
      borderColor: '#333',
      backgroundColor: '#fff',
      borderRadius: 10,
      marginHorizontal: 7,
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedCategory: {
      backgroundColor: '#333',
      borderColor: '#333',
    },
    categoryText: {
      fontSize: 16,
      color: '#333',
      fontWeight: '400',
    },
    selectedCategoryText: {
      color: '#fff',
    },
    articleContainer: {
      marginBottom: 25,
      backgroundColor: '#fff',
      padding: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 3,
    },
    articleImage: {
      width: '100%',
      height: 200,
      borderRadius: 10,
    },
    articleTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 10,
    },
    articleAuthor: {
      fontSize: 14,
      color: '#555',
      marginTop: 5,
    },
    articleTime: {
        fontSize: 14,
        color: '#888',
        marginTop: 5,
    },
});

export default HomeScreen;
