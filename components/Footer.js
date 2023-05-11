import styles from '../styles/Footer.module.css'
import { Link, Text, Center, IconButton } from '@chakra-ui/react';
import Image from 'next/image';


const Footer = () => {

    return (
        <div className={ styles.container }>
            <div className={ styles.bodyContainer }>
                <div>
                    <Text className={ styles.headerStyle }>Created by Kevin Ly</Text>
                    <Text className={ styles.headerStyle }>Developed using Next.js, Chakra UI, and OpenweatherMap API</Text>
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
                    </ul>
                    <div className={ styles.logoContainer }>
                        <Link href="https://github.com/omgitsomg">
                                <div className={ styles.logoBox }>
                                    <Image
                                        src="/GithubLogo.png"
                                        height={32}
                                        width={32}
                                        alt='Github Logo'
                                    />
                                </div>
                        </Link>
                        <Link href="https://www.linkedin.com/in/kevin-ly-7446941a2/">
                            <Image
                                src="/LinkedInLogo.png"
                                height={32}
                                width={32}
                                alt='LinkedIn Logo'
                            />
                        </Link>
                    </div>
                </Center>
            </div>
        </div>
    );
}

export default Footer;


                    