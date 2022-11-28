import React from "react"
import styled from "styled-components"
import { lightenDarkenColor, SB_NAVY } from "@colors"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import arrowRight from "../../images/arrow-right.svg"
import PropTypes from "prop-types"

const StyledButton = styled(OutboundLink)`
  transition: background-color 0.3s;
  text-decoration: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-family: Brandon;
  color: #FFFFFF;
  margin: auto;
  text-decoration: none;
  font-weight: 400;
  margin-top: 0.5em;
  font-size: 20px;
  padding: 0.4em 0.8em;
  margin-bottom: -50px;
  background: ${props => lightenDarkenColor(props.background, 15)};

  &:hover {
    background-color: ${props => lightenDarkenColor(props.background, 25)};
  }

  @media (min-width: 1000px) {
    width: fit-content;
    margin-right: calc(-2rem - 56px);
    min-width: 400px;
    margin-bottom: 0;
  }
`

const ButtonText = styled.span`
  line-height: calc(63px - 0.75em);
`

const ArrowImage = styled.img`
  visibility: visible;
  
  @media (max-width: 400px) {
    visibility: hidden;
  }
`

const PositionButton = ({ background, name, route }) => {
  return (
    <StyledButton href={route} background={background}>
      <ButtonText>{name}</ButtonText>
      <ArrowImage src={arrowRight} alt="right arrow"></ArrowImage>
    </StyledButton>
  )
}

PositionButton.propTypes = {
  background: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
}

export default PositionButton
