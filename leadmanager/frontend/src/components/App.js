import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
    render() {
        return (
            <hi>Hello</hi>
        )
    }
}

ReactDOM.render(<App />, document.querySelector('#app'))