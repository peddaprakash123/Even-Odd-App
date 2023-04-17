import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {text: 'Even', count: 0}

  onIncreament = () => {
    this.setState(prevState => {
      if (prevState.count % 2 === 0) {
        return {text: 'Even', count: Math.floor(Math.random() * 100)}
      }
      return {text: 'Odd', count: Math.floor(Math.random() * 100)}
    })
  }

  render() {
    const {text, count} = this.state
    let word = text
    if (count % 2 === 0) {
      word = 'Even'
    } else {
      word = 'Odd'
    }

    return (
      <div className="bg-container1">
        <div className="bg-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {word}</p>
          <button type="button" className="button" onClick={this.onIncreament}>
            Increment
          </button>
          <p className="paragraph1">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp