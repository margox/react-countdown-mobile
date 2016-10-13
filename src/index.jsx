import React from 'react'

export const formatSeconds = (seconds_in) => {

  if (isNaN(seconds_in)) {
    return '00:00:00'
  } else {

    let sec_num = parseInt(seconds_in, 10)
    let hours   = Math.floor(sec_num / 3600)
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60)
    let seconds = sec_num - (hours * 3600) - (minutes * 60)

    if (hours   < 10) {hours   = "0" + hours}
    if (minutes < 10) {minutes = "0" + minutes}
    if (seconds < 10) {seconds = "0" + seconds}

    return hours + ':' + minutes + ':' + seconds

  }

}

export default class CountDown extends React.Component{

  constructor(props) {

    super(props)
    this.__timmer = null
    this.state = {
      diff: 0
    }

  }

  componentDidMount() {
    this.updateTimeDiff()
  }

  componentWillUnmount() {
    clearTimeout(this.__timmer)
  }

  updateTimeDiff() {

    let endTime = this.props.endTime
    let diff = 0

    if (!isNaN(endTime)) {
      diff = endTime - new Date().getTime()
    }

    this.setState({ 
      diff: diff <= 0 ? 0 : diff
    }, () => {

      if (diff <= 0) {

        if (typeof this.props.onExpired === 'function') {

          setTimeout(() => {
            this.props.onExpired(diff)
          }, 1000)

        }

      } else {

        this.__timmer = setTimeout(() => {
          this.updateTimeDiff()
        }, 1000)

      }

    })

  }

  render() {

    let { withTag } = this.props

    if (withTag) {

      return <div dangerouslySetInnerHTML={{
        __html:'<span>' + formatSeconds(this.state.diff / 1000).replace(/:/g, '</span><em>:</em><span>') + '</span>'
      }}></div>

    } else {
      return (<span>{formatSeconds(this.state.diff / 1000)}</span>)
    }

  }

}