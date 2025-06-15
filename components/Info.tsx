import React from 'react'

const Info = ({ text, image }: InfoProps) => {

  return (

    <figure className='info-pill'>
      <img
        src={image}
        alt={text}
      />
      <figcaption>{text}</figcaption>
    </figure>

  )
}

export default Info
