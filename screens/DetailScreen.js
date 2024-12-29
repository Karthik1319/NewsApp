import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const DetailScreen = ({ route }) => {
  const { article } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: article.urlToImage }} style={styles.image} />
      
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.author}>By {article.author || 'Unknown Author'}</Text>
        <Text style={styles.source}>Source: {article.source.name}</Text>
        <Text style={styles.date}>Published: {new Date(article.publishedAt).toLocaleDateString()}</Text>
      </View>

      <Text style={styles.content}>{article.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f7f7', 
    marginTop: 5,
    paddingHorizontal: 15,
  },
  image: {
    width: '100%',
    height: 250,
    borderRadius: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',  
  },
  detailsContainer: {
    marginBottom: 20,
    paddingVertical: 10,
    backgroundColor: '#fff', 
    borderRadius: 10,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, 
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#333',  
    marginBottom: 12,
  },
  author: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#777',  
    marginBottom: 5,
  },
  source: {
    fontSize: 14,
    color: '#888',  
    marginBottom: 5,
  },
  date: {
    fontSize: 14,
    color: '#555',  
    marginBottom: 15,
  },
  content: {
    fontSize: 15,
    lineHeight: 22,
    color: '#333',  
    marginBottom: 30,
    paddingHorizontal: 10,
    fontFamily: 'Georgia',  
    fontStyle: 'italic',  
    textAlign: 'justify', 
    letterSpacing: 0.5, 
  },
});

export default DetailScreen;
