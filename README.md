## React-countdown-mobile
一个简单的React倒计时组件

### 示例

```javascript
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
```


```css
html,body{
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #fff;
}
#root{
  height: 100%;
}
.container{
  width: 980px;
  height: 100%;
  max-height: 100%;
  margin: 0 auto;
  overflow: auto;
}

/*美化倒计时*/
.countDown{
  line-height: 50px;
  overflow: hidden;
}
.countDown h5{
  margin: 0;
}

.countDown div,
.countDown span,
.countDown em{
  float: left;
  height: 50px;
}
.countDown > span{
  color: #666;
  font-size: 28px;
}
.countDown > div{
  margin: 0 .20px;
}
.countDown > div span{
  padding: 0 10px;
  color: #f8f8f8;
  font-size: 30px;
  background-color: #333;
  border-radius: 6px;
}
.countDown em{
  width: 40px;
  color: #666;
  font-size: 30px;
  font-style: normal;
  text-align: center;
}
```

该示例已经包含在git项目中，要亲自感受，可以clone此项目，然后在项目目录执行以下命令

```
npm i && npm run sample && open http://localhost:5998
```

### 组件属性
| 属性名                | 类型          | 说明    |
| ---------------------- | ------------- | :----- |
| endTime | Number | 结束时间戳(毫秒ms) |
| onExpired| Function | 倒计时结束时候的回调 |
| withTag | Boolean | 返回的倒计时组件是否包含HTML标签，默认false | 