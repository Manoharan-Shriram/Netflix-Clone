import React from 'react'
import './Footer.css'

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear();

  return (
    <footer>Copyright &copy; Manohar {year}</footer>
  )
}

export default Footer