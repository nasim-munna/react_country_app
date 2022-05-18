import React from 'react'
import style from './country.module.css'
import {CardGroup,Card} from 'react-bootstrap'
const Country = (props) => {
  const {name,area,population,flags,capital}=props.country;
  const handleRemoveCountry = (name)=>{
    props.onRemoveCountry(name)
  }
  return (
    <article>
      <CardGroup>
  <Card>
    <Card.Img variant="top" src={flags.png} alt={name.common} />
    <Card.Body>
      <Card.Title><h3>Name: {name.common}</h3></Card.Title>
      <Card.Text>
        <h3>Capital: {capital}</h3>
        <h3>Population: {population}</h3>
        <h3>Area: {area}</h3>
      </Card.Text>
      <button className={style.btn}  onClick={()=>{
          handleRemoveCountry(name.common)
        }}>Remove Country</button>
    </Card.Body>
  </Card>
  </CardGroup>
    </article>
  )
}

export default Country