// letters calcul JSX
import { Component } from 'react'
import './index.css'
class LettersCalculator extends Component {
  state = {
    inputPhrase: ''
  }

  onChangeInputPhrase = event => {
    const { value } = event.target
    this.setState({ inputPhrase: value })
  }
  render() {
    const { inputPhrase } = this.state

    return (
      <div className='container'>
        <div className='letters-calculator-container'>
          <div className='calculator-container'>
            <h1 className='heading'>Calculate the Letters you enter</h1>
            <div className='input-container'>
              <label className='label' htmlFor='phraseText'>Enter th phrase</label>
              <input className='letters-input' id='phraseText' onChange={this.onChangeInputPhrase} placeholder='Enter the phrase' type='text' value={inputPhrase} />
            </div>
            <p className='letters-count'>No. of letters:{inputPhrase.length}</p>
          </div>
          <img className='calculator-image' alt='letters calculator' src='https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png' />
        </div>
      </div>
    )
  }
}

export default LettersCalculator