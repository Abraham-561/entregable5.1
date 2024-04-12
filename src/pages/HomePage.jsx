import React from 'react'
import FormTrainer from '../components/HomePage/FormTrainer'
import './style/HomePage.css'

const HomePage = () => {
  return (
    <div className='home__pricipal'>
        <img className='home__img' src="public/pokedex.png" alt="" />
        <h2 className='home__saludo'> Hi trainer!</h2>
        <p className='home__text'>to see the pokemon's information of the pokemos tell me your trainer name</p>
        < FormTrainer/>

        <footer>
          <img className='home__foot' src="public/foot.png" alt="" />
        </footer>
    </div>
  )
}

export default HomePage