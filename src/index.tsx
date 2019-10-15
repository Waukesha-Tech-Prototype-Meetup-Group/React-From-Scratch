import * as React from 'react'
import { render } from 'react-dom'

const appRoot = () => {
  const HelloWorld = require('./HelloWorld').HelloWorld
  render(<HelloWorld />, document.getElementById('app'))
}

appRoot()

if (module.hot) {
  module.hot.accept('./HelloWorld', appRoot)
}
