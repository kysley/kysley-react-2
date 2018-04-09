import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { injectGlobal } from 'styled-components'

import TR from '../assets/fonts/Theinhardt-Regular.woff'
import TB from '../assets/fonts/Theinhardt-Bold.woff'
import AM from '../assets/fonts/akkurat-mono.ttf'

import Home from 'Presentational/Home'

injectGlobal`
  @font-face {
    font-family: Theinhardt;
    src: url(${TR}) format('woff');
  }
  @font-face {
    font-family: Theinhardt-Bold;
    src: url(${TB}) format('woff');
  }
  @font-face {
    font-family: Akkurat;
    src: url(${AM}) format('truetype');
  }
  body {
    letter-spacing: 0.05rem;
    line-height: 1.5rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    overflow-x: hidden;
  }
`

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default App
