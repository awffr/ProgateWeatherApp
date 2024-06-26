import React, { useState } from 'react';
import axios from 'axios';
import { BASE_URL, API_KEY } from './src/constant';
import { View, StyleSheet, Text, ActivityIndicator, Image } from 'react-native';
import WeatherSearch from './src/components/weatherSearch';
import WeatherInfo from './src/components/weatherInfo';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [status, setStatus] = useState('');

  const searchWeather = (location) => {
    setStatus('loading');
    axios
      .get(`${BASE_URL}?q=${location}&appid=${API_KEY}`)
      .then((response) => {
        const data = response.data;
        data.visibility /= 1000;
        data.visibility = data.visibility.toFixed(2);
        data.main.temp -= 273.15; // Convert Kelvin ke Celsius
        data.main.temp = data.main.temp.toFixed(2);
        setWeatherData(data);
        setStatus('success');
      })
      .catch((error) => {
        setStatus('error');
        console.log(error);
      });
  };

  const renderComponent = () => {
    switch (status) {
      case 'loading':
        return <ActivityIndicator size="large" color="#388E3C" />;
      case 'success':
        return <WeatherInfo weatherData={weatherData} />;
      case 'error':
        return (
          <Text style={styles.error}>
            Something went wrong. Please try again with a correct city name.
          </Text>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <WeatherSearch searchWeather={searchWeather} />
      <View style={styles.marginTop20}>{renderComponent()}</View>
      <Image
        source={require('./assets/land.gif')}
        style={styles.gif}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#E8F5E9', 
  },
  marginTop20: {
    marginTop: 20,
  },
  error: {
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
    fontFamily: 'monospace', 
  },
  gif: {
    width: '100%',
    height: 200,
    alignSelf: 'flex-end', 
    marginTop: 'auto', 
  },
});

export default App;
