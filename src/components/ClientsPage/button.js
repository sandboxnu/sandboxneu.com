import React from "react"
import styled from "styled-components"
import { lightenDarkenColor, SB_BUTTON_BLUE } from "@colors"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import arrowRight from "../../images/arrow-right.svg"
import PropTypes from "prop-types"

const StyledButton = styled(OutboundLink)`
  background-color: ${SB_BUTTON_BLUE};
  transition: background-color 0.3s;
  text-decoration: none;
  color: #fff;
  font-size: 1.5em;
  cursor: pointer;
  max-width: 420px;
  height: 63px;
  display: flex;
  justify-content: space-between;
  padding: 0.3em 1em;

  &:hover {
    background-color: ${lightenDarkenColor(SB_BUTTON_BLUE, 20)};
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

const Button = ({ name, route }) => {
  return (
    <StyledButton href={route}>
      <ButtonText>{name}</ButtonText>
      <ArrowImage src={arrowRight} alt="right arrow"></ArrowImage>
    </StyledButton>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
}

export default Button
