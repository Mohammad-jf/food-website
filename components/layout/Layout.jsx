import Link from 'next/link'
import Styles from './layout.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <header className={Styles.header}>

                <div className={Styles.left}>
                    <Link href='/'>Food App</Link>
                </div>

                <div className={Styles.right}>
                    <Link href='/menu'>Menu</Link>
                    <Link href='/categories'>Categories</Link>
                </div>
            </header>

            <div className={Styles.container}>{children}</div>

            <footer className={Styles.footer}>
                Next.Js course Food Project | all rights reserved &copy; mohammad jalifathi
            </footer>
        </>
    )
}

export default Layout