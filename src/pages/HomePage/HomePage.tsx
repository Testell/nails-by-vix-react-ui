import React from 'react'
import Logo from '../../components/Logo/Logo'
import NavBar from '../../components/Shared/NavBar/NavBar'
import styles from "./HomePage.module.css";
import Bio from '../../components/Bio/Bio';






function HomePage() {
  
  return (
    <main className={styles['page']}>
        <main>
            <section>
                <Logo/>
            </section>
            <section>
              <Bio/>
            </section>
        </main>
    </main>
  )
}

export default HomePage;