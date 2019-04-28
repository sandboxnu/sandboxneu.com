import { Header } from "../styles/Header"
import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const CardBG = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
  margin-left: 20px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  transition: 0.5s;
  width: 300px;
  height: 300px;
  text-align: center;
  &:hover {
    transform: translateY(-5px);
  }
`

const Card = styled.div`
  margin-top: -20px;
  width: 300px;
  height: 300px;
  border-radius: 20px;
  background-color: rgba(42, 66, 107, 0.8);
`

const CardHeader = styled(Header)`
  padding-top: 45px;
  font-size: 1.7em;
  @media (min-width: 480px) {
    font-size: 1.5em;
  }
  font-weight: 300;
  color: #fcbc80;
  height: 100px;
  margin-left: 20px;
  margin-right: 20px;

`
const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  margin: auto;
  align-items: center;
  justify-content: center;
  height: 50px;
`

const Tag = styled.div`
  font-size: 1em;
  @media (min-width: 480px) {
    font-size: 0.9em;
  }
  display: inline-block;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.2);
  padding-right: 7px;
  padding-left: 7px;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-left: 3px;
  margin-right: 3px;
  margin-bottom: 6px;
  text-align: center;
  color: white;
`
const Button = styled.div`
  z-index: 999;
  display: inline-block;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
  padding-right: 30px;
  padding-left: 30px;
  padding-top: 7px;
  padding-bottom: 7px;
  text-align: center;
  color: white;
  &:hover {
    color: #fcbc80;
  }
  margin-top: 50px;
`
class Project extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
  }

  constructor() {
    super()

    this.state = {
      expandedView: false,
    }
  }

  changeView = () => {
    this.setState(prevState => ({
      expandedView: !prevState.expandedView,
    }))
  }

  renderTags() {
    return (
      <TagsContainer>
        {this.props.tags.map(tag => (
          <Tag>{tag}</Tag>
        ))}
      </TagsContainer>
    )
  }

  renderCard() {
    var bgImg = {
      backgroundImage: 'url(' + this.props.backgroundImage + ')'
  }

    return (
      <CardBG onClick={this.changeView} style={bgImg}>
        <Card>
          <CardHeader> {this.props.title} </CardHeader>
          {this.renderTags()}
          <Button onClick={this.changeView}>Details</Button>
        </Card>
      </CardBG>
    )
  }

  renderExpanded() {
    return (
      <CardBG onClick={this.changeView}>
        <Card>
          <CardHeader> {this.props.title} </CardHeader>
          {this.renderTags()}
          <span>
            {" "}
            <Button onClick={this.changeView}>Details</Button>{" "}
          </span>
        </Card>
      </CardBG>
    )
  }

  render() {
    if (this.state.expandedView) {
      return this.renderExpanded()
    }
    return this.renderCard()
  }
}

export default Project
