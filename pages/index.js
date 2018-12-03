import React from 'react'
import Head from '../components/head'
import Calculator from '../components/calculator'
import NewCalculator from '../components/newcalculator'

import '../styles/style.scss'

const Home = () => (
  <div>
    <Head title="Home" />
    <NewCalculator />
  </div>
)

export default Home
