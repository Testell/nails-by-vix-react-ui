import React from 'react'
import Logo from '../../components/Logo/Logo'
import NavBar from '../../components/NavBar/NavBar'


function HomePage() {
  return (
    <main className=''>
        <header>
            <NavBar/>
        </header>
        <main>
            <section>
                <Logo/>
            </section>
        </main>
    </main>
  )
}

export default HomePage;