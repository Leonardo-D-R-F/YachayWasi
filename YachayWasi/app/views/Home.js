import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, ScrollView, Text, View, Dimensions, Image, Slider, Button } from 'react-native';
import Carousel from './app/components/Carousel'
const images = [
  'https://c4.wallpaperflare.com/wallpaper/912/238/496/architecture-artistic-buildings-castle-wallpaper-preview.jpg',
  'https://c0.wallpaperflare.com/preview/638/482/358/castle-lawn-great-britain-england.jpg',
  'https://c4.wallpaperflare.com/wallpaper/1000/780/17/knowledge-mathematics-students-university-wallpaper-preview.jpg',
  'https://c1.wallpaperflare.com/preview/544/345/284/library-books-knowledge-information.jpg',
  'https://c1.wallpaperflare.com/preview/160/500/36/various-college-education-learning.jpg',
];

export default class Home extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>Unidad Educativa Cositas React-Native</Text>
        <Carousel images={images} style={styles.containerCarousel}></Carousel>
        <View style={styles.containerButton}>
        <Button title="Iniciar Sesion"
          color="#ff35"
          style={styles.buttonIni}></Button>  
        </View>     
        <Text style={styles.textDescription}>
            Lorem ipsu sfovjndfkl dsodslk neo weo
          </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  textTitle: {flex: 1, textAlign: "center", marginTop: 12},
  container: {flex: 1, marginTop: 50, backgroundColor: "#888"},
  containerCarousel:{flex: 4},
  containerButton: {flex: 3,alignSelf: "center", justifyContent:"center"},
  buttonIni:{padding: 10},
  textDescription: {textAlign: "center", flex: 3}
});