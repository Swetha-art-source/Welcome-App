// Write your code here
import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribe: false}

  toHandleClick = () => {
    this.setState(prevState => ({
      isSubscribe: !prevState.isSubscribe,
    }))
  }

  renderAuth = () => {
    const {isSubscribe} = this.state
    if (isSubscribe === true) {
      return (
        <button type="button" className="btn" onClick={this.toHandleClick}>
          Subscribed
        </button>
      )
    }
    return (
      <button type="button" className="btn" onClick={this.toHandleClick}>
        Subscribe
      </button>
    )
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="description">Thank you! Happy Learning</p>
        {this.renderAuth()}
      </div>
    )
  }
}

export default Welcome
