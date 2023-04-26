import React from 'react'

const Contact = (props) => {
  setTimeout(()=>{
    props.history.push('/about')
  }, 60000)
  return (
    <div className="container">
    <h4 className="center">Contact</h4>
    <p>
    <a href="https://elianebettocchi.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Eliane Bettocchi</a> was born in Brazil in 1968 and moved to the US in 2022, where I am now pursuing a career in web development using my current and prior experiences in Design and Education fields. Both professional and academic experience helped me shape the way I design things.
    </p>
    </div>
  )
}

export default Contact