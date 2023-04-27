import styles from '../styles/Navbar.module.css'

import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';


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
                <h1 className={ styles.navbarTitle }> <Link href="/">Weather Forecast</Link> </h1>
                <ul className={ styles.navbarNavigation }>
                    <li className={ styles.navbarListItems }>
                        <Link className={ router.pathname == "/" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive} href="/">Home</Link>
                    </li>
                    <li className={ styles.navbarListItems }>
                        <Link className={ router.pathname == "/about" ? styles.navbarNavigationItemsActive : styles.navbarNavigationItemsInactive } href="/about">About</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
