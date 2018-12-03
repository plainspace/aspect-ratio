import React from 'react'
import Head from '../components/head'
import Calculator from '../components/Calculator'
import Info from '../components/Info'

import '../styles/style.scss'

const Home = props => (
  <div>
    <Head />
    <Calculator />
    <Info />
  </div>
)

export default Home
