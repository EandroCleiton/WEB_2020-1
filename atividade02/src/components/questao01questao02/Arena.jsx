import React from 'react'
import { DM, DBE } from '../../Constants'

const Hero = props => 
    <div>
        <h4>{props.name}</h4>
        <img src={props.img} width="480px"/>
        {props.arena}
    </div>

const Enemy = props => 
    <div>
        <h4>{props.name}</h4>
        <img src={props.img} width="480px"/>
        {props.arena}
    </div>


const Arena = props => 
    <div className="Imagem">
        <Hero name = "Mago Negro" img = {DM}/>
        <h3>VS</h3>
        <Enemy name = "Dragão Branco de Olhos Azuis" img = {DBE}/>
    </div>



export default Arena;