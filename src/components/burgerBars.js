import React from "react"
import Burger from "./burger.js"

export default class BurgerBars extends React.Component {
  constructor(props) {
    super(props)
    this.state = { toggleOpen: false }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("Clicked!")
    this.setState(state => ({
      toggleOpen: !state.toggleOpen,
    }))
  }

  render() {
    return (
      <span style={{ float: "right" }}>
        <i
          class="fa fa-bars"
          onClick={this.handleClick}
          style={{ display: "inline", position: "absolute", right: "1rem" }}
        />
        {this.state.toggleOpen ? (
          <Burger pages={this.props.pages} />
        ) : (
          <span>Closed</span>
        )}
      </span>
    )
  }
}
