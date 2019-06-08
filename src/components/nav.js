import React, { useState, useEffect } from "react"
import PropTypes from "prop-types"
import styled, { css, keyframes } from "styled-components"

import { SB_NAVY, SB_ORANGE_RGBA } from "@colors"
import { SectionContent } from "styles/Section"
import SquareLogo from "./squareLogo"

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`

const Container = styled.nav`
  position: fixed;
  width: 100%;
  z-index: 100;
  background: rgba(255, 255, 255, 1);
  transition: background 0.3s, box-shadow 0.3s;
  box-shadow: 0 0 10px rgba(31, 33, 38, 0.5);
  ${props =>
    props.hideBackground &&
    css`
      background: rgba(255, 255, 255, 0);
      box-shadow: none;
    `}
  ${props =>
    props.fadeIn &&
    css`
      animation: ${fadeIn} 2s;
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
  line-height: inherit;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 1px solid ${SB_ORANGE_RGBA(0)};
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

const Nav = ({ page, pages }) => {
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
    <Container
      hideBackground={atTop && page === "index"}
      fadeIn={page === "index"}
    >
      <ContentContainer>
        <SquareLogo
          size="3em"
          color={atTop && page === "index" ? "#fff" : SB_NAVY}
          dropShadow={atTop && page === "index"}
          href="/"
          hoverAnimation
        />
        <ButtonContainer>
          {pages.map(p => (
            <Button href={p.route} isWhite={atTop && page === "index"}>
              {p.name}
            </Button>
          ))}
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
