import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

const Container = styled.div`
  width: fit-content;
  height: fit-content;
  background-color: ${({ mobileBackgroundColor }) => mobileBackgroundColor};
  padding: 25px;

  @media (min-width: 700px) {
    border: 3px solid;
    width: fit-content;
    height: fit-content;
    position: relative;
    border-color: ${({ color }) => color};
    padding: 25px;
    background-color: transparent;
  }
`
const Title = styled.span`
  color: ${({ color }) => color};
  font-family: Montserrat;
  font-style: italic;
  font-weight: bold;
  font-size: 50px;

  @media (min-width: 700px) {
    position: absolute;
    background: white;
    display: block;
    width: ${({ isSpotlight }) => isSpotlight && `min-content`};
    top: ${({ isSpotlight }) => (isSpotlight ? `10px` : `-30px`)};
    left: ${({ titleAlign }) => titleAlign === "left" && `5%`};
    right: ${({ titleAlign }) => titleAlign === "right" && `5%`};
    max-width: 80%;
  }
`

const SpotlightText = styled.span`
  color: ${({ color }) => color};
  font-family: Andale Mono;
  font-size: 20px;
  padding: 0 10px;
  background: transparent;
  display: block;

  @media (min-width: 700px) {
    background: white;
    position: absolute;
    right: 5%;
    top: -13px;
  }
`

const Link = styled.a`
  font-family: Andale Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  color: ${({ backgroundColor }) => backgroundColor};
  background: ${({ color }) => color};
  padding: 6px 14px;
  text-decoration: none;
  transition: background .2s ease-out;
  border-radius: 10px;
  display: block;
  width: fit-content;

  &:hover {
    cursor: pointer;
    background: ${({ backgroundColorHover }) => backgroundColorHover};
  }

  @media(min-width: 700px) {
    position: absolute;
    color: ${({ color }) => color};
    background: ${({ backgroundColor }) => backgroundColor};
    border-radius: 25px;
    border 15px solid white;
    bottom: -28px;
    right: 0px;
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
  backgroundColor,
  backgroundColorHover,
}) => {
  return (
    <Container color={color} mobileBackgroundColor={backgroundColor}>
      {isSpotlight && (
        <SpotlightText color={color}>project spotlight</SpotlightText>
      )}
      <Title color={color} isSpotlight={isSpotlight} titleAlign={titleAlign}>
        {title}
      </Title>
      {linkSrc && linkText && (
        <Link
          href={linkSrc}
          color={color}
          backgroundColor={backgroundColor}
          backgroundColorHover={backgroundColorHover}
        >
          {linkText}
        </Link>
      )}
      {children}
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkSrc: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  isSpotlight: PropTypes.bool.isRequired,
}
export default Card
