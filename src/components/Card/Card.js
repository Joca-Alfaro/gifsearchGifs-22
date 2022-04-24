import './Card.css';
import '../Card/Card.css';
import React from 'react'
import {getApiGifp} from '../api/getInfoApi.js'
import '../componentes/pikachu.png';



export const Card = () => {
  const respuesta = getApiGifp('goku')
  return (
    <> 
       <div className='PADRE'>
        <div className='IMG'>
            <img  src="https://c.tenor.com/2ik7GaJlNLEAAAAC/dbz-goku.gif" alt="Le vaio la imagen" />
 
           

        </div>


        

        <div className='Titulo'>
            <h2> Goku</h2>
            </div> 

        <div className='Subtitulo'> 
        <h3>Goku en Movimiento</h3>
        </div>        
    
    </div>

{console.log("mojup",respuesta)}

    </>
  )
 
  
}


export default Card;