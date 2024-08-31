// Write your code here
import {Component} from 'react'

import './index.css'

const HEAD_IMG_URL = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const TAIL_IMG_URK = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: HEAD_IMG_URL, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount
    if (toss === 0) {
      tossImg = HEAD_IMG_URL
      latestHeadsCount += 1
    } else {
      tossImg = TAIL_IMG_URK
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImg,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="coin-toss">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="desc">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-img"
          />
          <button className="button" type="button" onClick={this.onTossCoin}>
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
