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
  top: ${({ isSpotlight }) => (isSpotlight ? `10px` : `-30px`)};
  background: white;
  left: ${({ titleAlign }) => titleAlign === "left" && `5%`};
  right: ${({ titleAlign }) => titleAlign === "right" && `5%`};
  padding: 0 10px;
  width: ${({ isSpotlight }) => isSpotlight && `min-content`};
  max-width: 80%;
`

const SpotlightText = styled.span`
  color: ${({ color }) => color};
  font-family: Andale Mono;
  font-size: 20px;
  right: 5%;
  top: -13px;
  padding: 0 10px;
  background: white;
  position: absolute;
`

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

const Card = ({
  children,
  title,
  titleAlign,
  linkText,
  linkSrc,
  color,
  isSpotlight,
}) => {
  return (
    <Container color={color}>
      {isSpotlight && (
        <SpotlightText color={color}>project spotlight</SpotlightText>
      )}
      <Title color={color} isSpotlight={isSpotlight} titleAlign={titleAlign}>
        {title}
      </Title>
      {linkSrc && linkText && (
        <Link href={linkSrc} color={color}>
          {linkText}
        </Link>
      )}
      {children}
    </Container>
  )
}
export default Card
