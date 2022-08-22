import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { useAmplitudeLogEvent } from "utils/amplitude"

import { SB_NAVY, SB_ORANGE_RGBA, SB_SALMON } from "@colors"
import { accentFont } from "@global"
import { SectionContent } from "styles/components/Section"
import SquareLogo from "./squareLogo"

const WrapperDiv = styled.nav`
  width: 100%;
  height: 100%;
  z-index: 110;
  position: relative;
`

const Container = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
  background: ${SB_NAVY};
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 10px rgba(31, 33, 38, 0.5);
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

  @media (max-width: 600px) {
    visibility: hidden;
  }
`

const SideContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(255, 255, 255, 0.5);
  transition: height 0.2s ease-in;
  top: 0;
  right: 0;
  ${props =>
    !props.isOpen &&
    css`
      height: 0%;
      transition: height 0.2s ease-in;
      top: 0;
      right: 0;
    `}
`

const SideNavBar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${SB_NAVY};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  height: 80%;
  width: 100%;
  margin: 0 0 0 12em;
  transition: height linear 0.3s;
  @media (min-width: 600px) {
    visibility: hidden;
  }

  ${props =>
    !props.isOpen &&
    css`
      height: 0;
      transition: height linear 0.3s;
    `}
`

const SideButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align: center;
  height: 100%;
  padding-top: 60px;
  width: 100%;
  background-color: ${SB_NAVY};
  transition: visibility 0.2s ease-in-out 0.2s;
  ${props =>
    !props.isOpen &&
    css`
      visibility: hidden;
      transition: visibility 0.1s ease-in-out;
    `}
`

const SideButton = styled(Link)`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.5em;
  padding: 1em 1.5em;
  margin: 0.5em;
`

const Button = styled(Link)`
  letter-spacing: 0.15em;
  line-height: inherit;
  font-family: Andale Mono;
  text-transform: lowercase;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 2px solid ${SB_ORANGE_RGBA(0)};
  ${props =>
    `
      color: ${props.selectColor};
    `}
  transition: color 0.3s, text-shadow 0.3s, border-bottom 0.3s;
  ${props =>
    props.isWhite &&
    css`
      text-shadow: 0 0 5px #000;
    `}
  &:hover {
    border-bottom: 2px solid ${SB_ORANGE_RGBA(1)};
  }
  &:not(:last-child) {
    margin-right: 1.5em;
    @media (min-width: 600px) {
      margin-right: 3em;
    }
  }
`

const ToggleMobileSidebarIcon = styled.span`
  position: absolute;
  width: 2em;
  height: 0.25em;
  border-radius: 4px;
  ${props =>
    `
      background-color: ${props.color};
    `}
  ${props =>
    props.isOpen &&
    css`
      transition-delay: 0.12s;
      transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      transform: rotate(45deg);
    `}
  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 2em;
    height: 0.25em;
    border-radius: 4px;
    ${props =>
      `
        background-color: ${props.color};
      `}
    top: -0.64em;
    transition: top 75ms ease 0.12s, opacity 75ms ease;
    ${props =>
      props.isOpen &&
      css`
        top: 0;
        transition: top 75ms ease, opacity 75ms ease 0.12s;
      `}
  }
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 2em;
    height: 0.25em;
    border-radius: 4px;
    ${props =>
      `
        background-color: ${props.color};
      `}
    bottom: -0.65em;
    transition: bottom 75ms ease 0.12s,
      transform 75ms cubic-bezier(0.55, 0.055, 0.675, 0.19);
    ${props =>
      props.isOpen &&
      css`
        bottom: 0;
        transition: bottom 75ms ease,
          transform 75ms cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
        transform: rotate(-90deg);
      `}
  }
`

const ToggleMobileSidebarContainer = styled.div`
  display: inline;
  position: absolute;
  right: 56px;
  @media (min-width: 600px) {
    visibility: hidden;
  }
`

const Nav = ({ page, pages }) => {
  const [atTop, setAtTop] = useState(true)
  const [sideOpen, setSideOpen] = useState(false)

  useAmplitudeLogEvent("Page load", { page: page })

  const handleScroll = () => {
    const pageY = document.body.scrollTop || document.documentElement.scrollTop
    if (pageY > 0 && atTop) {
      setAtTop(false)
    } else if (pageY === 0) {
      setAtTop(true)
    }
  }

  const handleBurgerClick = () => {
    setSideOpen(!sideOpen)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <WrapperDiv isOpen={sideOpen}>
      <SideContainer isOpen={sideOpen}>
        <SideNavBar isOpen={sideOpen}>
          <SideButtonContainer isOpen={sideOpen}>
            {pages.map(p => (
              <SideButton to={p.route} key={p.name}>
                {p.name}
              </SideButton>
            ))}
          </SideButtonContainer>
        </SideNavBar>
      </SideContainer>
      <Container
        isSideOpen={sideOpen}
        hideBackground={atTop && page === "index"}
      >
        <ContentContainer>
          <SquareLogo
            size="3em"
            color="#fff"
            dropShadow={atTop && page === "index"}
            to="/"
            hoverAnimation
          />
          <ToggleMobileSidebarContainer>
            <ToggleMobileSidebarIcon
              color={(atTop && page === "index") || sideOpen ? "#fff" : SB_NAVY}
              onClick={handleBurgerClick}
              isOpen={sideOpen}
            />
          </ToggleMobileSidebarContainer>
          <ButtonContainer>
            {pages.map(p => (
              <Button
                to={p.route}
                selectColor="#fff"
                key={p.name}
              >
                {p.name}
              </Button>
            ))}
          </ButtonContainer>
        </ContentContainer>
      </Container>
    </WrapperDiv>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
