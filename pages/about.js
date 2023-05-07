import { Heading, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css"

const about = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.bio }>
                <Image src="/fullportrait.jpg" height="55vh" alt="Picture of Kevin Ly"></Image>
                <div className={ styles.aboutMeTextWrapper }>
                    <Heading>Hey everyone, I&apos;m Kevin Ly.</Heading>
                    <Text fontSize="3xl" width="20em" whiteSpace="normal" mb="6">I am a senior at VCU majoring in computer science 
                    with a concentration in software engineering and a minor in mathematics. This weather forecast website I made was designed to display the weather
                    for the next five days with three-hour intervals. My goals and motivations for this project were to practice and understand NextJS, Chakra UI, and JavaScript.</Text>
                    <Text fontSize="2xl">Links:</Text>
                    <Text fontSize="xl" textDecoration="underline"><a href="https://www.linkedin.com/in/kevin-ly-7446941a2/">LinkedIn</a></Text>
                    <Text fontSize="xl" textDecoration="underline"><a href="https://github.com/omgitsomg">Github</a></Text>
                </div>
            </div>
        </div>
    );
}

export default about;