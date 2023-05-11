import styles from '../styles/Navbar.module.css'

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '@chakra-ui/react';

const Navbar = () => {
    const router = useRouter();

    return (
        <div>
            <nav className={styles.navbar}>
                <Image
                    src="/sun.png"
                    height={32}
                    width={32}
                    alt='SVG of the sun'
                />
                <h1> <Link href="/">Weather Forecast</Link> </h1>
                <ul className={ styles.navbarNavigation }>
                    <li className={ styles.navbarListItems }>
                        <Link href="/">
                            <a className={ router.pathname == "/" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive} >Home</a>
                        </Link>
                    </li>
                    <li className={ styles.navbarListItems }>
                        <Link href="/about">
                            <a className={ router.pathname == "/about" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive } >About</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
