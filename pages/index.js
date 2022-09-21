import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homepage.module.css'
import Navbar from '../components/Navbar'

export default function Home() {

  const apiKey = '26f8c8b54b275db0e248ea96af630bb6'

  const [zipcode, setZipcode] = useState([23220]);
  const [todaysweather, setWeather] = useState([]);


  const getLatitudeLongitude = async () => {
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode},US&appid=${apiKey}`)
    const data = await response.json()
    const latitude = data.lat
    const longitude = data.lon
    console.log(latitude)
    console.log(longitude)
    setZipcode(data)
    return { latitude, longitude }
  }

  const DisplayTodaysWeather = async(props) => {
    const latitude = props.latitude
    const longitude = props.longitude

    // Template String here to replace latitude, longitude, and apiKey with variables
    const response = await fetch (`http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
    const data = await response.json()
    const weatherForecastResult = data.list

    // Format of the Array
    // [Time in EST, ]
    const formattedForecast = []
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
    }

    setWeather(formattedForecast)
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className={ styles.body }>
        <p className={ styles.title }>Weather Forecasting Tool</p>
        <label>Zipcode:</label>
        <input 
          type="text" 
          id="zipcode" 
          value={zipcode}
          onChange={(newComment) => setZipcode(newComment.target.value)}
          />
        <button onClick={() => {
          getLatitudeLongitude().then((data) => {
            DisplayTodaysWeather(data)
          }
        )}}>Submit</button>
        <p> { JSON.stringify(zipcode) } </p>
        <p> { JSON.stringify(todaysweather)} </p>
      </div>
    </div>
  )
}
