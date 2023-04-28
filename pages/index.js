import { useEffect, useState } from 'react'
import Head from 'next/head'

import styles from '../styles/Homepage.module.css'
import WeatherCard from '../components/WeatherCard'
import { Input, SimpleGrid, Heading, Button, Center, Text} from '@chakra-ui/react';

export default function Home() {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const [zipcode, setZipcode] = useState([]);
  const [city, setCity] = useState([]);
  const [weatherForecast, setWeather] = useState([]);
  const [buttonActive, setButton] = useState(false);


  const handleKeyDown = (event) => {
    // If the key pressed is the Enter key
    // Then submit the input
    if(event.key === "Enter")
    {
      console.log("Inside Function: " + event.key)
      handleSubmit()
    }
  }


  function errorDisplay() {
    return <div>
      <Center>
        <Text fontSize="3xl">Please Enter a Valid United States Zipcode</Text>
      </Center>
    </div>
  }


  function weatherGrid(zipcode, weatherForecast) {
    if(weatherForecast !== undefined &&  weatherForecast.length != 0) {
      return <div className={styles.simpleGridWrapper}>
        <Center bg="gray.200">
          <Heading mt={12}>{"Zipcode: " + zipcode + ", City: " + city}</Heading>
        </Center>
        <SimpleGrid minChildWidth='20rem' spacing={6} padding="4rem 3em" bg="gray.200">
          {weatherForecast.map(item => (
            <WeatherCard key={item.id} date={item[0]} temperature={item[1]} humidity={item[2]} weatherid={item[3]} weather_desc={item[4]} />
          ))}
        </SimpleGrid>
      </div>;
    } else {
      return errorDisplay();
    }
  }
  

  // Get the latitude and the longitude
  // Call the OpenWeatherMap API
  // Display the weather
  const handleSubmit = () => {
    getLatitudeLongitude().then((data) => {
      console.log("Debug data: " + data);
      FiveDayForecastData(data);
      setButton(true);
    });
  };
    

  async function getLatitudeLongitude() {
    // Fetch is an asynchronous function
    // We use await to wait for the fetch() function to return
    // Once it returns an object store it in the response and then save the json verson the response into a data variable
    const response = await fetch(`https://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=${apiKey}`)
    const data = await response.json()

    // Error Handling
    if(response.status >= 400) {
      return { latitude: 0, longitude: 0, statuscode: response.status }
    } else {
      const latitude = data.lat
      const longitude = data.lon
      return { latitude, longitude, statuscode: response.status }
    }
  }


  const FiveDayForecastData = async(props) => {
    // Error handling to check if the status code is >= 400
    if(props.statuscode >= 400)
    {
      setWeather([]);
    } else {
      let latitude = props.latitude;
      let longitude = props.longitude;

      // Template String here to replace latitude, longitude, and apiKey with variables
      // Fetch the 5-day / 3 Hour forecast data
      let response = await fetch (`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`);
      let data = await response.json();

      // the list part of the JSON contains the list of the weather forecast for the next 5 days in 3-hour intervals
      var weatherForecastResult = data.list;
      var newCity = data.city.name;
      setCity(newCity);

      console.log("data in fivedayforecastdata: ", data)
      console.log("weatherForecastResult: ", weatherForecastResult)
      
      // Format of the Array
      // [Time in EST, temperature, humidity, weather id, weather description]
      let formattedForecast = [];
      // https://stackoverflow.com/questions/65141935/uncaught-in-promise-typeerror-cannot-read-property-length-of-undefined
      // https://trackjs.com/blog/debugging-cannot-read-property-length-of-undefined/
      if(weatherForecastResult && weatherForecastResult.length > 0)
      {
        for (let i = 0; i < weatherForecastResult.length; i++)
        {
          // dt_txt is the date time in text
          let localFormattedTime = new Date(weatherForecastResult[i].dt_txt)
          formattedForecast[i] = [
            localFormattedTime.toLocaleDateString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' }), // Set the language to english and show the hour and minute
            weatherForecastResult[i].main.temp,
            weatherForecastResult[i].main.humidity,
            weatherForecastResult[i].weather[0].id,
            weatherForecastResult[i].weather[0].description,
          ]
          console.log(localFormattedTime);
        }
      }
      // todays weather is a 2D array
      setWeather(formattedForecast);
      console.log(zipcode);
  }
  }


  return (
    <div className={ styles.container }>
      <Head>
        <title>Weather Forecasting Tool</title>
      </Head>
      <div className={ styles.top }>
        <Heading className={ styles.title }>Weather Forecasting Tool</Heading>
        <div className={ styles.inputWrapper }>
          <Input
            variant="pill"
            focusBorderColor="blue.400"
            type="text" 
            id="zipcodeValue"
            placeholder="Enter a Zipcode"
            onChange={(newComment) => {
              setZipcode(newComment.target.value)
            }}
            size="lg"
            width="20rem"
            onKeyDown={(event) => {
              handleKeyDown(event)
            }}
          />
        </div>
          <div className={ styles.buttonWrapper }>
            <Button 
            colorScheme='blue'
            size="lg"
            onClick={ handleSubmit }>
              Submit
            </Button>
          </div>
          <div className={ buttonActive ? styles.activeDisplayContainer : styles.inactiveDisplayContainer}>
          {
            buttonActive &&
            weatherGrid(zipcode, weatherForecast)
          }
          </div>
      </div>
    </div>
  )
}