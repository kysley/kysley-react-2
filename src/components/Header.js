import React, { Fragment } from 'react'

import { HeaderWrapper, HeaderLinks, HeaderLink, HeaderName, HeaderDesc } from 'Styled/Header'
import Logo from 'Styled/Logo'

const Header = () => (
  <Fragment>
    <HeaderWrapper>
      <Logo src={require('../assets/img/logo@1x.png')} />
      <HeaderLinks>
        <HeaderLink href="https://linkedin.com/in/evankysley" target="_blank">linkedin</HeaderLink>
        <HeaderLink href="https://github.com/kysley" target="_blank">github</HeaderLink>
      </HeaderLinks>
      <HeaderName>Evan Kysley</HeaderName>
      <HeaderDesc>
        I'm a 3rd Year Software Engineering Student,
        Designer, and Developer. Currently creating glamorous web experiences.
      </HeaderDesc>
    </HeaderWrapper>
  </Fragment>
)

export default Header
