import React, { useRef } from 'react'
import { setTrainer} from "../../store/states/trainer.slice"
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './PokedexPage/style/FormTrainer.css'

const FormTrainer = () => {

    const trainerInput = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(setTrainer (trainerInput.current.value.trim()));
        navigate('/pokedex')
        
    }
  return (
    <form className='form__contenedor' onSubmit={handleSubmit}>
        <input className='form__input' ref={trainerInput} type="text" />
        <button className='form__btn'>Lest Start</button>

    </form>
  )
}

export default FormTrainer