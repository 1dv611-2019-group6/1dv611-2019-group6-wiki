import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import TestComponent from './components/TestComponent'
import AnotherComponent from './components/AnotherComponent'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <TestComponent text="Testing, testing.." />
                    <AnotherComponent text="This is another component" />
                </header>
            </div>
        )
    }
}

export default App
