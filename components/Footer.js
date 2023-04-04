import styles from '../styles/Footer.module.css'
import { Text } from '@chakra-ui/react';

import { useRouter } from 'next/router';
import Image from 'next/image';


const Footer = () => {

    return (
        <div className={ styles.container }>
            <div className={ styles.bodyContainer }>
                <div>
                    <Text className={ styles.headerStyle } fontSize="3xl">Created by Kevin Ly</Text>
                    <Text className={ styles.headerStyle } fontSize="lg">Developed using Next.js, Chakra UI, and OpenweatherMap API</Text>
                </div>
                <ul style={ { marginLeft: "auto" } }>
                    <li style={ { listStyleType: "none", paddingBottom:"0.5em" } }>
                        <a href="/" className={ styles.textStyle }>Home</a>
                    </li>
                    <li style={ { listStyleType:"none", paddingBottom:"0.5em" } }>
                        <a href="/about" className={ styles.textStyle }>About</a>
                    </li>
                    <li style={ { listStyleType:"none", paddingBottom:"0.5em" } }>
                        <Text textDecoration="underline"><a className={ styles.textStyle } href="https://github.com/omgitsomg">Github</a></Text>
                    </li>
                    <li style={ { listStyleType:"none", paddingBottom:"0.5em" } }>
                        <Text textDecoration="underline"><a className={ styles.textStyle } href="https://www.linkedin.com/in/kevin-ly-7446941a2/">LinkedIn</a></Text>
                    </li>
                </ul>
                
            </div>
        </div>
    );
}

export default Footer;


                    