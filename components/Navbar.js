import styles from '../styles/Navbar.module.css'

import { useRouter } from 'next/router';
import Image from 'next/image';


const Navbar = () => {

    const router = useRouter();

    return (
        <div>
            <nav className={styles.navbar}>
                <Image
                    src="/sun.png"
                    height={32}
                    width={32}
                />
                <h1 className={ styles.navbarTitle }> <a href="/">Weather Forecast</a> </h1>
                <ul className={ styles.navbarNavigation }>
                    <li className={ styles.navbarListItems }>
                        <a className={ router.pathname == "/" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive} href="/">Home</a>
                    </li>
                    <li className={ styles.navbarListItems }>
                        <a className={ router.pathname == "/about" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive } href="/about">About</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
