import { Header, HeaderLineBelow } from "../styles/Header"
import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Body from "../styles/Body.js"
import { SB_ORANGE, SB_NAVY_RGBA } from "@colors"

const CardBG = styled.div`
  margin-bottom: 20px;
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
  background-color: ${SB_NAVY_RGBA(0.8)};
`

const CardHeader = styled(Header)`
  padding-top: 45px;
  font-size: 1.7em;
  @media (min-width: 480px) {
    font-size: 1.5em;
  }
  font-weight: 300;
  color: ${SB_ORANGE};
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
  background-color: rgba(0, 0, 0, 0.35);
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

const CardButton = styled.div`
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
  cursor: pointer;
  ${CardBG}:hover & {
    color: ${SB_ORANGE};
  }
  margin-top: 50px;
`
const ExpandedCard = styled.div`
  position: fixed;
  border-radius: 10px;
  background: white;
  width: 500px;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding-left: 30px;
  padding-right: 30px;
  padding-bottom: 30px;
`

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.7);
`
const ExpandedHeader = styled(HeaderLineBelow)`
  font-size: 1.75em;
`

const ExpandedClose = styled.div`
  position: fixed;
  font-size: 2.5em;
  top: -10px;
  right: 5px;
  padding: 10px;
  cursor: pointer;
  color: gray;
  &:hover {
    color: ${SB_ORANGE};
  }
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
      backgroundImage: "url(" + this.props.backgroundImage + ")",
    }

    return (
      <CardBG onClick={this.changeView} style={bgImg}>
        <Card>
          <CardHeader> {this.props.title} </CardHeader>
          {this.renderTags()}
          <CardButton> Details </CardButton>
        </Card>
      </CardBG>
    )
  }

  renderExpanded() {
    return (
      <Overlay>
        <ExpandedCard>
          <ExpandedClose onClick={this.changeView}> x </ExpandedClose>
          <ExpandedHeader> {this.props.title} </ExpandedHeader>
          <Body> {this.props.description} </Body>
        </ExpandedCard>
      </Overlay>
    )
  }

  render() {
    if (this.state.expandedView) {
      return (
        <div>
          {this.renderExpanded()}
          {this.renderCard()}
        </div>
      )
    }
    return this.renderCard()
  }
}

export default Project
