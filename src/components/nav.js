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
  background: rgba(255, 255, 255, 1);
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 10px rgba(31, 33, 38, 0.5);
  ${props =>
    (props.hideBackground || props.isSideOpen) &&
    css`
      background: rgba(255, 255, 255, 0);
      box-shadow: none;
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

  @media (max-width: 600px) {
    visibility: hidden;
  }
`

const SideContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: rgb(255, 255, 255, 0.5);
  ${props =>
    !props.isOpen &&
    css`
      width: 0%;
    `}
`

const SideNavBar = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${SB_NAVY};
  z-index: 200;
  margin: 0 0 0 12em;
  height: 100%;
  @media (min-width: 600px) {
    visibility: hidden;
  }

  ${props =>
    !props.isOpen &&
    css`
      visibility: hidden;
    `}
`

const SideButtonContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align: center;
  padding: 50% 0%;
  margin: 2em;
  height: 100%;
  width: 80%;
  background-color: ${SB_NAVY};
`

const SideButton = styled(Link)`
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  font-size: 2em;
  padding: 1.5em;
  margin: 0.5em;
  height: 50%;
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
  &:not(:last-child) {
    margin-right: 1.5em;
    @media (min-width: 600px) {
      margin-right: 3em;
    }
  }
`

const StyledMobileOnlyIcon = styled(FontAwesomeIcon)`
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

  function burgerButton() {
    return (
      <StyledMobileOnlyIcon
        icon={sideOpen ? faTimes : faBars}
        onClick={handleBurgerClick}
        size={"1x"}
        color={(atTop && page === "index") || sideOpen ? "#fff" : SB_NAVY}
      />
    )
  }

  return (
    <WrapperDiv isOpen={sideOpen}>
      <SideContainer isOpen={sideOpen}>
        <SideNavBar isOpen={sideOpen}>
          <SideButtonContainer>
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
            color={atTop && page === "index" ? "#fff" : SB_NAVY}
            dropShadow={atTop && page === "index"}
            to="/"
            hoverAnimation
          />
          {burgerButton()}
          <ButtonContainer>
            {pages.map(p => (
              <Button
                to={p.route}
                isWhite={atTop && page === "index"}
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
