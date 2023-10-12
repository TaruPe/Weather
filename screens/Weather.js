import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

// Define API settings to object "api"
const api = {
url: process.env.EXPO_PUBLIC_API_URL,
key: process.env.EXPO_PUBLIC_API_KEY,
icons: process.env.EXPO_PUBLIC_ICONS_URL
}

export default function Weather(props) {
  // Initialize state variables using React's "useState" hook
  const [temp, setTemp] = useState(0)
  const [description, setDescription] = useState('')
  const [icon, setIcon] = useState('')

  useEffect(() => {
    // Create an API request using the specified URL and the location information given to the component
    const url = api.url +
      'lat=' + props.latitude +
      '&lon=' + props.longitude +
      '&units=metric' +
      '&appid=' + api.key

    // Perform the search using the fetch method
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
          console.log(json)
          setTemp(json.main.temp)
          setDescription(json.weather[0].description)
          setIcon(api.icons + json.weather[0].icon + '@2x.png')
        })
        .catch((error) => {
          setDescription("Error retrieving weather information.")
          console.log(error)
        })
  }, [])

  return (
    <View>
      <Text style={styles.temp}>{temp}</Text>
      {icon &&
        <Image source={{uri: icon}} style={{width: 100, height: 100}} />
      }
      <Text>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  temp: {
    fontWeight: 'bold',
    marginTop: 10,
  },
});
