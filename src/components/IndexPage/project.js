import React, { Component } from "react"
import BackgroundImage from "gatsby-background-image"
import PropTypes from "prop-types"
import styled from "styled-components"

import { Header, HeaderLineBelow } from "styles/components/Header"
import Body from "styles/components/Body"
import { SB_ORANGE, SB_NAVY_RGBA } from "@colors"

const CardBG = styled(BackgroundImage)`
  margin-bottom: 1.25em;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  border-radius: 7px;
  transition: 0.3s;
  width: 300px;
  height: 300px;
  text-align: center;
  &:hover {
    transform: translateY(-5px);
  }
`

const Card = styled.div`
  margin-top: -1.25em;
  width: 300px;
  height: 300px;
  border-radius: 7px;
  background-color: ${SB_NAVY_RGBA(0.85)};
  cursor: pointer;
`

const CardHeader = styled(Header)`
  padding-top: 45px;
  font-size: 1.5em;
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
  font-size: 0.9em;
  display: inline-block;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.35);
  padding: 5px 7px 5px 7px;
  margin: 0px 3px 6px 3px;
  text-align: center;
  color: white;
`

const CardButton = styled.div`
  z-index: 999;
  display: inline-block;
  border: 1px solid;
  border-radius: 5px;
  box-shadow: 0 0 5px -1px rgba(0, 0, 0, 0.2);
  padding: 7px 30px 7px 30px;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  -webkit-transition: all 0.3s ease-in;
  ${CardBG}:hover & {
    color: ${SB_ORANGE};
  }
  margin-top: 60px;
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
  padding: 0px 30px 30px 30px;
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

  openGithub = () => {
    var win = window.open(this.props.github, "_blank")
    win.focus()
  }

  renderTags() {
    return (
      <TagsContainer>
        {this.props.tags.map(tag => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </TagsContainer>
    )
  }

  renderCard() {
    const { backgroundImage } = this.props

    return (
      <CardBG
        onClick={this.openGithub}
        Tag="div"
        fluid={backgroundImage.childImageSharp.fluid}
      >
        <Card>
          <CardHeader> {this.props.title} </CardHeader>
          {this.renderTags()}
          <CardButton> Details </CardButton>
        </Card>
      </CardBG>
    )
  }

  // This will need to be further developed later
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
