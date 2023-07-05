import React from 'react'
import Logo from '../../components/Logo/Logo'
import NavBar from '../../components/NavBar/NavBar'
import styles from "./HomePage.module.css";


function HomePage() {
  return (
    <main className={styles['page']}>
        <main>
            <section>
                <Logo/>
            </section>
        </main>
    </main>
  )
}

export default HomePage;