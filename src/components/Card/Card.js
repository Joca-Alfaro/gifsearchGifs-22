import './Card.css';
import '../Card/Card.css';
import React from 'react'
import '../componentes/pikachu.png';



export const Card = () => {
  return (
    <div className='PADRE'>
        <div className='IMG'>
            <img  src="./pikachu/indice.png" alt="pikachu.png" />
 
   
        </div>


        

        <div className='Titulo'>
            TITULO DE EL GIFT
            </div> 

        <div className='Subtitulo'> 
        SUBTITULO DEL GIFT
        </div>
    
    </div>
  )
}

export default Card;