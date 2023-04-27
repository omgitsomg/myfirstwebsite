import { Heading, Image, Text } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import styles from "../styles/About.module.css"

const about = () => {
    return (
        <div className={ styles.container }>
            <div className={ styles.bio }>
                <Image src="/fullportrait.jpg" height="55vh"></Image>
                <div className={ styles.aboutMeTextWrapper }>
                    <Heading>Hey everyone, I&apos;m Kevin Ly.</Heading>
                    <Text fontSize="3xl" width="20em" whiteSpace="normal" mb="6">I am a senior at VCU majoring in Computer Science 
                    with a concentration in Software Engineering and a minor in Mathematics. This weather forecast website I made was designed to specifically display the weather
                    for the next five days with three-hour intervals. My goals and my motivations for this project was to practice and understand NextJS, Chakra UI, and in general JavaScript.</Text>
                    <Text fontSize="2xl">Links:</Text>
                    <Text fontSize="xl" textDecoration="underline"><a href="https://www.linkedin.com/in/kevin-ly-7446941a2/">LinkedIn</a></Text>
                    <Text fontSize="xl" textDecoration="underline"><a href="https://github.com/omgitsomg">Github</a></Text>
                </div>
            </div>
        </div>
    );
}

export default about;