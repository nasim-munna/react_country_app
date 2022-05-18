import React from 'react'
import {v4 as uuidv4} from 'uuid'
import Country from './Country'
import style from './countries.module.css'
const Countries = (props) => {
  return (
    <div className={style.countries}>
        {props.countries.map((country)=>{
            const countrynew ={country,id:uuidv4()}
            return <Country {...countrynew} onRemoveCountry={props.onRemoveCountry} key={countrynew.id}/>
})}
    </div>
  )
}

export default Countries