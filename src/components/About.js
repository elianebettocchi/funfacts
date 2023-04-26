import React from 'react'
import Rainbow from './hoc/Rainbow';
const About = () => {
  return (
    <div className="container">
    <h4 className="center">About</h4>
    <p>
    Brazil (Portuguese: Brasil;), officially the Federative Republic of Brazil (Portuguese: República Federativa do Brasil), is the largest country in South America and in Latin America. At 8.5 million square kilometers (3,300,000 sq mi) and with over 217 million people, Brazil is the world's fifth-largest country by area and the seventh most populous. Its capital is Brasília, and its most populous city is São Paulo. The federation is composed of the union of the 26 states and the Federal District. It is the only country in the Americas to have Portuguese as an official language.It is one of the most multicultural and ethnically diverse nations, due to over a century of mass immigration from around the world, and the most populous Roman Catholic-majority country.
    <br />
    <a href="https://en.wikipedia.org/wiki/Brazil" target="_blank" rel="noopener noreferrer"><img className='img' src="https://upload.wikimedia.org/wikipedia/en/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png" alt="brazilian flag" /></a>
    </p>
    </div>
  )
}

export default Rainbow(About);