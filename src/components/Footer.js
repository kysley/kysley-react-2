import React from 'react'

import { FooterWrapper, FooterContent, FooterEmail } from 'Styled/Footer'

const Footer = () => (
  <FooterWrapper>
    <FooterContent>Thanks for stopping by :)</FooterContent>
    <FooterEmail href="mailto:evan@kysley.com?subject=Hey%20Evan,%20wanted%20to%20reach%20out--">
      Send me an email
    </FooterEmail>
  </FooterWrapper>
)

export default Footer
