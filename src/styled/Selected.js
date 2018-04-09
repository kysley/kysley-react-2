import styled from 'styled-components'

const SelectedWrapper = styled.div`
  border-radius: 2px;
  background: ${props => props.colour ? props.colour : ''};
  width: 50%;
  margin-bottom: 1em;
  padding: 0.5em;
  transition: box-shadow 0.3s;
  margin-left: 0.5em;

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  }
`

const SelectedHeader = styled.h3`
  margin-top: 2em;
  font-size: 2rem;
  font-family: Theinhardt-Bold;
`

const SelectedName = styled.span`
  font-size: 1.3rem;
  font-family: Theinhardt;
`
const SelectedDesc = styled.span`
  display: block;
  font-size: 1rem;
  font-family: Akkurat;
  padding-left: 0.2em;
`

const SelectedLink = styled.a`
  display: block;
  text-decoration: none;
  color: #000;
`

export {
  SelectedWrapper,
  SelectedHeader,
  SelectedName,
  SelectedDesc,
  SelectedLink,
}
