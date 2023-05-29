import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

const images = [
  {
    title: 'Resim 1',
    image: require('../assets/kunefe/kunefe1.jpg'),
  },
  {
    title: 'Resim 2',
    image: require('../assets/kunefe/kunefe2.jpeg'),
  },
  {
    title: 'Resim 3',
    image: require('../assets/kunefe/kunefe3.jpg'),
  },
  {
    title: 'Resim 4',
    image: require('../assets/kunefe/kunefe1.jpg'),
  },
];

const Gallery = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => `image-${index}`}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        snapToInterval={300}
        decelerationRate="fast"
        renderItem={({ item }) => (
          <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.imageTitleContainer}>
              <Text style={styles.imageTitle}>{item.title}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   
    
  },
  imageContainer: {
    width: 300,
    height: 400,
    marginHorizontal: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  imageTitleContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageTitle: {
    color:'#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Gallery;
