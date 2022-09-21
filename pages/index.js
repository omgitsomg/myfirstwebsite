import { useState } from 'react'

import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Homepage.module.css'
import Navbar from '../components/Navbar'

export default function Home() {

  let apiKey = '26f8c8b54b275db0e248ea96af630bb6'

  const [zipcode, setZipcode] = useState([]);

  const displayTodaysWeather = async () => {
    const response = await fetch('http://api.openweathermap.org/geo/1.0/zip?zip=23220,US&appid=' + apiKey)
    const data = await response.json()
    setZipcode(data)

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
        <button onClick={displayTodaysWeather}>Submit</button>
        <p> { JSON.stringify(zipcode) } </p>
      </div>
    </div>
  )
}
