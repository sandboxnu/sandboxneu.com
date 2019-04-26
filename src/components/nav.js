import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import Logo from "./logo"
import { SectionContent } from "../styles/Section"
import styled, { css } from "styled-components"

const Container = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 0.9);
  transition: background 0.5s;
  ${props =>
    props.hideBackground &&
    css`
      background: rgba(255, 255, 255, 0);
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
  transition: color 0.5s;
  ${props =>
    props.isWhite &&
    css`
      color: #fff;
    `}
`

const Nav = ({ siteTitle }) => {
  const [atTop, setAtTop] = useState(true)

  const handleScroll = e => {
    if (e.pageY > 0 && atTop) {
      setAtTop(false)
    } else if (e.pageY === 0) {
      setAtTop(true)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    handleScroll({ pageY: window.pageYOffset })
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Container hideBackground={atTop}>
      <ContentContainer>
        <Logo size="3em" color={atTop ? "white" : "blue"} />
        <ButtonContainer>
          <Button href="https://forms.gle/aZB5fGMEBKB4uDLU7" isWhite={atTop}>
            Join Us
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
