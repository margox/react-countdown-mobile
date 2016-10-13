import React from 'react'
import ReactDOM from 'react-dom'
import CountDown from '../src'

class CountDownDemo extends React.Component {

  render() {

    let endTime = new Date().getTime()

    return (
      <div className="container">
        <div className="countDown">
          <h5>倒计时1</h5>
          <CountDown onExpired={() => this.handleExpired1()} endTime={endTime + 30000}/>
        </div>
        <div className="countDown">
          <h5>倒计时2</h5>
          <CountDown onExpired={() => this.handleExpired2()} withTag={true} endTime={endTime + 300000}/>
        </div>
      </div>
    )

  }

  handleExpired1() {
    alert('倒计时1结束啦！！快跑啦！！！')
  }

  handleExpired2() {
    alert('倒计时2结束啦！！快跑啦！！！')
  }

}

ReactDOM.render(<CountDownDemo />, document.querySelector('#root'))