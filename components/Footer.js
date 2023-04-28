import styles from '../styles/Footer.module.css'
import { Link, Text, Center } from '@chakra-ui/react';

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
                <Center>
                    <ul style={ { marginLeft: "auto" } }>
                        <li style={ { listStyleType: "none", paddingBottom:"0.5em" } }>
                            <Text className={ styles.textStyle }>
                                <Link href="/">
                                    Home
                                </Link>
                            </Text>
                        </li>
                        <li style={ { listStyleType:"none", paddingBottom:"0.5em" } }>
                            <Text className={ styles.textStyle }>
                                <Link href="/about">
                                    About
                                </Link>
                            </Text>
                        </li>
                        <li style={ { listStyleType:"none", paddingBottom:"0.5em" } }>
                            <Text textDecoration="underline"  className={ styles.textStyle }>
                                <Link href="https://github.com/omgitsomg">
                                    Github
                                </Link>
                            </Text>
                        </li>
                        <li style={ { listStyleType:"none", paddingBottom:"0.5em" } }>
                            <Text textDecoration="underline"  className={ styles.textStyle }>
                                <Link href="https://www.linkedin.com/in/kevin-ly-7446941a2/">
                                    LinkedIn
                                </Link>
                            </Text>
                        </li>
                    </ul>
                </Center>
            </div>
        </div>
    );
}

export default Footer;


                    