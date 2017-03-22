import React, { Component }  from 'react'
import { render } from 'react-dom'
import Todos from './todos'
import Chat from './chat'
import Json from './json'
import Gun from 'gun'

const gun = Gun(location.origin)

const App = _ =>
  <div>
    <h1>React Examples</h1>
    <h2>Todo</h2>
    <Todos gun={gun} />
    <br />
    <hr />
    <h2>Chat</h2>
    <Chat gun={gun} />
    <br />
    <hr />
    <h2>Json</h2>
    <Json gun={gun} />
  </div>

render(<App />,  document.getElementById('app'))

