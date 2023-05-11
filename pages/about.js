import { Heading, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css"

const about = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.bio }>
                <Image 
                    src="/fullportrait.jpg" 
                    alt="Picture of Kevin Ly"
                    className={ styles.imageStyle }
                />
                <div className={ styles.aboutMeTextWrapper }>
                    <h2 className={ styles.bioTitle }>Hey everyone, I&apos;m Kevin Ly.</h2>
                    <p className={ styles.bioText }>I am a senior at VCU majoring in computer science 
                    with a concentration in software engineering and a minor in mathematics. This weather forecast website I made was designed to display the weather
                    for the next five days with three-hour intervals. My goals and motivations for this project were to practice and understand NextJS, Chakra UI, and JavaScript.</p>
                    <Text>Links:</Text>
                    <Text textDecoration="underline"><a href="https://www.linkedin.com/in/kevin-ly-7446941a2/">LinkedIn</a></Text>
                    <Text textDecoration="underline"><a href="https://github.com/omgitsomg">Github</a></Text>
                </div>
            </div>
        </div>
    );
}

export default about;