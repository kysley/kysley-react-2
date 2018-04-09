import styled from 'styled-components'

const FooterWrapper = styled.div`
  display: flex;
  margin: 3em;
  padding: 3em;
  border-radius: 2px;
  justify-content: center;
  flex-direction: column;
  background: #f5f5f5;
`

const FooterContent = styled.span`
  font-family: Theinhardt;
  margin-bottom: 1em;
`

const FooterEmail = styled.a`
  display: inline-block;
  font-family: Akkurat;
  color: #000;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`

export {
  FooterWrapper,
  FooterContent,
  FooterEmail,
}
