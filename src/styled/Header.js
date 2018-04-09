import styled from 'styled-components'

const HeaderWrapper = styled.header`
  padding-top: 20vh;
`

const HeaderLinks = styled.div`
  position: fixed;
  display: flex;
  width: 50vw;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: -4rem;
`

const HeaderLink = styled.a`
  text-decoration: underline;
  color: #000;
  font-family: Akkurat;
  &:first-of-type {
    margin-right: 1em;
  }
  &:hover {
    text-decoration: none;
  }
`

const HeaderName = styled.h1`
  font-family: Theinhardt-Bold;
  font-size: 2em;
  color: black;
  margin-bottom: 0.5em;
`

const HeaderDesc = styled.h2`
  font-family: Theinhardt;
  font-weight: 300;
  font-size: 1rem;
  width: 60%;
  padding-left: 0.5em;
`

export {
  HeaderWrapper,
  HeaderLinks,
  HeaderLink,
  HeaderName,
  HeaderDesc,
}
