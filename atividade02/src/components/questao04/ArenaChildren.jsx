import React from 'react'
import { DM, DBE } from '../../Constants'


const Hero = props =>
    <div>
        <h4>{props.name}</h4>
        <img src={DM} width="480px"/>
        <h4> da arena {props.arena}</h4>
    </div>



const Enemy = props =>
    <div>
        <br/>
        <h4>{props.name}</h4>
        <img src={DBE} width="480px"/>
        <h4> da arena {props.arena}</h4>
    </div>


const ArenaChildren = props =>
    <div>
        <h3>{props.arena}</h3>

        {React.Children.map(props.children, arena => {
            return React.cloneElement(arena, { ...props });
        })}
    </div>

export {Hero, Enemy, ArenaChildren}