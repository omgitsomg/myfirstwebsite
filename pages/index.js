import { useEffect, useState } from 'react'

import styles from '../styles/Homepage.module.css'
import WeatherCard from '../components/WeatherCard'
import { Input, SimpleGrid, Heading, Button} from '@chakra-ui/react';
import { inputTheme } from '../components/Input';

export default function Home() {

  const apiKey = process.env.NEXT_PUBLIC_API_KEY;

  const [zipcode, setZipcode] = useState([]);
  const [todaysweather, setWeather] = useState([]);
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

  // Get the latitude and the longitude
  // Call the OpenWeatherMap API
  // Display the weather
  const handleSubmit = () => {
    getLatitudeLongitude().then((data) => {
      console.log("Debug data: " + data);
      FiveDayForecastData(data);
      setButton(true);
      console.log(zipcode);
    }
    );
  };
    
  async function getLatitudeLongitude() {
    console.log("Before the fetch call", zipcode)
    // Fetch is an asynchronous function
    // We use await to wait for the fetch() function to return
    // Once it returns an object store it in the response and then save the json verson the response into a data variable
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=${apiKey}`)
    const data = await response.json()
    console.log("data ", data)
    const latitude = data.lat
    const longitude = data.lon
    console.log(latitude)
    console.log(longitude)
    console.log("After setZipcode in the getLatitudeLongitude call", zipcode)
    return { latitude, longitude }
  }

  const FiveDayForecastData = async(props) => {
    let latitude = props.latitude
    let longitude = props.longitude

    // Template String here to replace latitude, longitude, and apiKey with variables
    // Fetch the 5-day / 3 Hour forecast data
    let response = await fetch (`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    let data = await response.json()
    var weatherForecastResult = data.list // Grab the list of the 5-day / 3 Hour forecast

    // Format of the Array
    // [Time in EST, temperature, humidity, weather id, weather description]
    let formattedForecast = []
    // https://stackoverflow.com/questions/65141935/uncaught-in-promise-typeerror-cannot-read-property-length-of-undefined
    // https://trackjs.com/blog/debugging-cannot-read-property-length-of-undefined/
    if(weatherForecastResult && weatherForecastResult.length > 0)
    {
      for (let i = 0; i < weatherForecastResult.length; i++)
      {
        let localFormattedTime = new Date(weatherForecastResult[i].dt_txt)
        formattedForecast[i] = [
          localFormattedTime.toLocaleDateString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' }), // Set the language to english and show the hour and minute
          weatherForecastResult[i].main.temp,
          weatherForecastResult[i].main.humidity,
          weatherForecastResult[i].weather[0].id,
          weatherForecastResult[i].weather[0].description,
        ]
        console.log(localFormattedTime)
      }
    }

    // todays weather is a 2D array
    setWeather(formattedForecast)
    console.log(zipcode)
  }

  return (
    <div>
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
      </div>
      {
        buttonActive &&
        <SimpleGrid minChildWidth='20rem' spacing={6} padding="4rem 16em" bg="gray.200">
        {
          todaysweather.map(item => (
            <WeatherCard date={item[0]} temperature={item[1]} humidity={item[2]} weatherid={item[3]} weather_desc={item[4]} />
          ))
        }
        </SimpleGrid>
      }
    </div>
  )
}

// {/* Cards of the weather forecast for each 3-hour interval */}
