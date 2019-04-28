import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"

import { SectionContent } from "styles/Section"
import SquareLogo from "./squareLogo"

const Container = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 10px rgba(31, 33, 38, 0.5);
  ${props =>
    props.hideBackground &&
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
`

const Button = styled.a`
  letter-spacing: 0.15em;
  text-transform: uppercase;
  text-decoration: none;
  color: #2a426b;
  transition: color 0.3s, text-shadow 0.3s;
  ${props =>
    props.isWhite &&
    css`
      color: #fff;
      text-shadow: 0 0 5px #000;
    `}
`

const Nav = () => {
  const [atTop, setAtTop] = useState(true)

  const handleScroll = () => {
    const pageY = document.body.scrollTop || document.documentElement.scrollTop
    if (pageY > 0 && atTop) {
      setAtTop(false)
    } else if (pageY === 0) {
      setAtTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Container hideBackground={atTop}>
      <ContentContainer>
        <SquareLogo
          size="3em"
          color={atTop ? "white" : "blue"}
          dropShadow={atTop}
        />
        <ButtonContainer>
          <Button href="https://forms.gle/aZB5fGMEBKB4uDLU7" isWhite={atTop}>
            Join
          </Button>
        </ButtonContainer>
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
