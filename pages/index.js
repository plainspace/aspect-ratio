import React from 'react'
import Head from '../components/head'
import Calculator from '../components/calculator'

const Home = () => (
  <div>
    <Head title="Home" />
    <Calculator />

    <style jsx global>{`
      body {
        font-family: system-ui;
      }
    `}</style>
  </div>
)

export default Home
