import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const WeatherInfo = ({ weatherData }) => {
  const {
    name,
    main: { temp },
    weather,
    visibility,
    wind: { speed },
  } = weatherData;

  const weatherDetails = weather[0];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>The weather of {name}</Text>
      <Text style={styles.temperature}>{temp} °C</Text>
      <View style={styles.rowContainer}>
        <Image
          source={{ uri: `https://openweathermap.org/img/w/${weatherDetails.icon}.png` }}
          style={styles.weatherIcon}
        />
        <Text style={styles.bold}>{weatherDetails.main}</Text>
      </View>
      <Text style={styles.text}>{weatherDetails.description}</Text>
      <View style={styles.rowContainer}>
        <Text style={styles.bold}>Visibility :</Text>
        <Text style={styles.value}>{visibility} km</Text>
      </View>
      <View style={styles.rowContainer}>
        <Text style={styles.bold}>Wind Speed :</Text>
        <Text style={styles.value}>{speed} m/s</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#E8F5E9', 
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#81C784', 
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: '#388E3C', 
    fontFamily: 'monospace',
    marginBottom: 10,
  },
  bold: {
    fontWeight: '700',
    color: '#388E3C', 
    fontFamily: 'monospace',
    fontSize: 18,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  temperature: {
    fontWeight: '700',
    fontSize: 50,
    color: '#388E3C', 
    fontFamily: 'monospace',
    textAlign: 'center',
    marginBottom: 10,
  },
  weatherIcon: {
    width: 50,
    height: 50,
  },
  value: {
    fontSize: 18,
    color: '#388E3C', 
    fontFamily: 'monospace',
    marginLeft: 10,
  },
});

export default WeatherInfo;
