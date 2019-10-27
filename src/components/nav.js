import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { useAmplitudeLogEvent } from "utils/amplitude"

import { SB_NAVY, SB_ORANGE_RGBA } from "@colors"
import { SectionContent } from "styles/components/Section"
import SquareLogo from "./squareLogo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Container = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.3);
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 10px rgba(31, 33, 38, 0.5);
  ${props =>
    props.hideBackground &&
    css`
      box-shadow: none;
    `}
  ${props =>
    props.mobileExpand &&
    css`
      background: rgba(255, 255, 255, 0.3);
      height: 100%;
    `}
`

const ContentContainer = styled(SectionContent)`
  height: 4em;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
`

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media (max-width: 601px) {
    visibility: hidden;
  }
`
const MobileBox = styled.div`
  display: block;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  text-color: white;
  padding: 50% 0 50% 0%;

  ${props =>
    !props.mobileExpand &&
    css`
      height: 0%;
      visibility: hidden;
      padding: 0;
    `}
`

const Button = styled(Link)`
  letter-spacing: 0.15em;
  line-height: inherit;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 2px solid ${SB_ORANGE_RGBA(0)};
  color: ${SB_NAVY};
  transition: color 0.3s, text-shadow 0.3s, border-bottom 0.3s;
  ${props =>
    props.isWhite &&
    css`
      color: #fff;
      text-shadow: 0 0 5px #000;
    `}
  &:hover {
    border-bottom: 2px solid ${SB_ORANGE_RGBA(1)};
  }

  ${props =>
    !props.isMobile &&
    css`
      &:not(:last-child) {
        margin-right: 1.5em;

        @media (min-width: 600px) {
          margin-right: 3em;
        }
      }
    `}
  ${props =>
    props.isMobile &&
    css`
      text-align: center;
      display: block;
      padding: 2em;
      align: center;
    `}
`
const BurgerBars = styled(FontAwesomeIcon)`
  display: inline;
  position: absolute;
  right: 25px;
  color: ${props => props.color};
  size: 2em;

  @media (min-width: 600px) {
    visibility: hidden;
  }
`
const Nav = ({ page, pages }) => {
  const [atTop, setAtTop] = useState(true)
  const [open, setOpen] = useState(false)
  useAmplitudeLogEvent("Page load", { page: page })

  const handleScroll = () => {
    const pageY = document.body.scrollTop || document.documentElement.scrollTop
    if (pageY > 0 && atTop) {
      setAtTop(false)
    } else if (pageY === 0) {
      setAtTop(true)
    }
  }

  const handleClick = () => {
    console.log("Click!: " + open)
    setOpen(!open)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const fakePages = [
    { route: null, name: "Apple" },
    { route: null, name: "Bobs" },
    { route: null, name: "Crisps" },
    { route: null, name: "Dogs" },
  ]

  function desktop() {
    return (
      <ButtonContainer>
        {pages.map(p => (
          <Button to={p.route} isWhite={atTop && page === "index"} key={p.name}>
            {p.name}
          </Button>
        ))}
      </ButtonContainer>
    )
  }

  function mobile() {
    return (
      <MobileBox mobileExpand={open}>
        <BurgerBars
          icon={faTimes}
          onClick={handleClick}
          size={"1x"}
          color={"white"}
        />
        {pages.map(p => (
          <Button to={p.route} isWhite={true} key={p.name} isMobile={open}>
            {p.name}
          </Button>
        ))}
      </MobileBox>
    )
  }

  return (
    <Container mobileExpand={open} hideBackground={atTop && page === "index"}>
      {mobile()}
      <ContentContainer>
        <SquareLogo
          size="3em"
          color={atTop && page === "index" ? "#fff" : SB_NAVY}
          dropShadow={atTop && page === "index"}
          to="/"
          hoverAnimation
        />
        {desktop()}
        <BurgerBars
          icon={faBars}
          onClick={handleClick}
          size={"1x"}
          color={atTop && page === "index" ? "white" : SB_NAVY}
        />
      </ContentContainer>
    </Container>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
