import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SB_LIGHT_SALMON, SB_SALMON, SB_NAVY } from "@colors"

const Container = styled.div`
  border: 3px solid #fff;
  width: fit-content;
  height: fit-content;
  position: relative;
  border-color: ${SB_LIGHT_SALMON};
  padding: 25px;

  // mobile style
  @media (max-width: 600px) {
    border-color: #fff;
    border-top-color: ${SB_LIGHT_SALMON};
  }
`
const Title = styled.span`
  background: white;
  color: ${SB_SALMON};
  font-family: Montserrat;
  font-size: 18px;
  left: 0;
  top: -15px;
  padding: 0 20px;
  position: absolute;
`

const BodyText = styled.p`
  background: white;
  color: ${SB_NAVY};
  font-family: Montserrat;
  font-size: 15px;
`

const Card = ({ title, body }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <BodyText>{body}</BodyText>
    </Container>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}
export default Card
