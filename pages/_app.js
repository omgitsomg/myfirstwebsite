import '../styles/globals.css'
import '../styles/weather-icons.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { myTheme } from "../styles/Theme.js"

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={ myTheme }>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </ChakraProvider>
  )
}

export default MyApp
