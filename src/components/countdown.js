import React, { Component } from "react"
import styled from "styled-components"
import { SB_SALMON } from "@colors"

const CountdownContainer = styled.div`
  display: flex;
  margin: 50px;
  justify-content: center;
`

const CountdownElement = styled.div`
  margin: 15px;

  @media (min-width: 750px) {
    margin: 25px;
  }
`

const CountdownNumber = styled.div`
  font-size: 1.5em;
  color: ${SB_SALMON};
  @media (min-width: 750px) {
    font-size: 3.5em;
  }
`

const CountdownText = styled.div`
  font-size: 1em;
  @media (min-width: 750px) {
    font-size: 1.25em;
  }
`

class Countdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    }
  }

  componentDidMount() {
    // update every second
    this.interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date)
      date ? this.setState(date) : this.stop()
    }, 1000)
  }

  componentWillUnmount() {
    this.stop()
  }

  calculateCountdown(endDate) {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000

    // clear countdown when date is reached
    if (diff <= 0) return false

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    }

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400))
      diff -= timeLeft.years * 365.25 * 86400
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400)
      diff -= timeLeft.days * 86400
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600)
      diff -= timeLeft.hours * 3600
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60)
      diff -= timeLeft.min * 60
    }
    timeLeft.sec = diff

    return timeLeft
  }

  stop() {
    clearInterval(this.interval)
  }

  addLeadingZeros(value) {
    value = String(value)
    while (value.length < 2) {
      value = "0" + value
    }
    return value
  }

  render() {
    const countDown = this.state

    return (
      <CountdownContainer>
        <CountdownElement>
          <CountdownNumber>
            {this.addLeadingZeros(countDown.days)}
          </CountdownNumber>
          <CountdownText>Days</CountdownText>
        </CountdownElement>

        <CountdownElement>
          <CountdownNumber>
            {this.addLeadingZeros(countDown.hours)}
          </CountdownNumber>
          <CountdownText>Hours</CountdownText>
        </CountdownElement>

        <CountdownElement>
          <CountdownNumber>
            {this.addLeadingZeros(countDown.min)}
          </CountdownNumber>
          <CountdownText>Minutes</CountdownText>
        </CountdownElement>

        <CountdownElement>
          <CountdownNumber>
            {this.addLeadingZeros(countDown.sec)}
          </CountdownNumber>
          <CountdownText>Seconds</CountdownText>
        </CountdownElement>
      </CountdownContainer>
    )
  }
}

export default Countdown
