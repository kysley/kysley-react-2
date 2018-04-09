import React from 'react'
import { Spring } from 'react-spring'

import Works, { Other } from '../utils/works'

import { SelectedHeader } from 'Styled/Selected'
import Header from 'Components/Header'
import Container from 'Styled/Container'
import Selected from 'Components/Selected'
import Footer from 'Components/Footer'

const Home = () => (
  <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} speed={0.3}>
    {styles => (
      <Container style={styles}>
        <Header />
        <SelectedHeader>Selected</SelectedHeader>
        <Selected works={Works} />
        <SelectedHeader>More</SelectedHeader>
        <Selected works={Other} />
        <Footer />
      </Container>
    )}
  </Spring>
)

export default Home
