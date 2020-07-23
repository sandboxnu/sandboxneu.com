import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border: 3px solid;
  height: 296px;
  width: 556px;
  position: relative;
  border-color: ${({ color }) => color};
  padding: 25px;
`
const Title = styled.span`
  color: ${({ color }) => color};
  position: absolute;
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 50px;
  top: -30px;
  background: white;
  left: ${({ color }) => color === "#FA8072" && `5%`};
  right: ${({ color }) => color === "#FEB729" && `5%`};
  padding: 0 10px;
`

const SpotlightTitle = styled.div``

const Link = styled.a`
  position: absolute;
  font-family: Andale Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  color: ${({ color }) => color};
  background: white;
  bottom: -10px;
  right: 0px;
  padding: 0 10px;
  &:hover {
    cursor: pointer;
  }
`

const Card = ({ children, title, linkText, linkSrc, color, isSpotlight }) => {
  return (
    <Container color={color}>
      {isSpotlight ? (
        <SpotlightTitle color={color}>
          <span>project spotlight</span>
          <span>{title}</span>
        </SpotlightTitle>
      ) : (
        <Title color={color}>{title}</Title>
      )}
      <Link href={linkSrc} color={color}>
        {linkText}
      </Link>
      {children}
    </Container>
  )
}
export default Card
