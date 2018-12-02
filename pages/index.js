import React from 'react'
import Head from '../components/head'
import Calculator from '../components/calculator'
import NewCalculator from '../components/newcalculator'

const Home = () => (
  <div>
    <Head title="Home" />
    <NewCalculator />

    <style jsx global>{`
      body {
        font-family: system-ui;
      }
    `}</style>
  </div>
)

export default Home
