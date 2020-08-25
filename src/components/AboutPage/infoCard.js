import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { SB_LIGHT_SALMON, SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"

const Container = styled.div`
  border: 3px solid #fff;
  width: fit-content;
  min-height: 380px;
  position: relative;
  border-color: ${SB_LIGHT_SALMON};
  padding: 25px;

  // mobile style
  @media (max-width: 600px) {
    border-color: #fff;
    background-color: ${SB_LIGHT_SALMON};
  }
`
const Title = styled.span`
  background-color: #fff;
  color: ${SB_SALMON};
  font-family: Montserrat;
  font-size: 30px;
  font-weight: 600;
  font-style: italic;
  text-transform: uppercase;
  left: 0;
  top: -18px;
  padding: 0 20px;
  position: absolute;
  // mobile style
  @media (max-width: 600px) {
    background-color: unset;
    padding: 0;
    position: unset;
  }
`

const LinkContainer = styled.div`
  text-align: end;
`

const Link = styled.a`
  position: absolute;
  font-family: Andale Mono;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 21px;
  color: ${SB_SALMON};
  background: ${SB_LIGHT_SALMON};
  bottom: -28px;
  right: 0px;
  padding: 6px 14px;
  border-radius: 25px;
  text-decoration: none;
  border: 15px solid white;
  transition: background 0.2s ease-out;

  &:hover {
    cursor: pointer;
    background: #fee6e3;
  }

  // mobile style
  @media (max-width: 600px) {
    border: unset;
    color: ${SB_LIGHT_SALMON};
    background: ${SB_SALMON};
    position: unset;
  }
`

const BodyText = styled.p`
  color: ${SB_NAVY};
  font-family: Montserrat;
  font-size: 15px;
`

const ActionContainer = styled.p`
  text-align: center;
`

const ActionLink = styled.a`
  color: ${SB_ORANGE};
  font-family: Montserrat;
  font-size: 15px;
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`

const InfoCard = ({
  title,
  body,
  linkText,
  linkSrc,
  action,
  actionSrc,
  conclusion,
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <BodyText>{body}</BodyText>
      <ActionContainer>
        <ActionLink href={actionSrc}>{action}</ActionLink>
      </ActionContainer>
      <BodyText>{conclusion}</BodyText>
      <LinkContainer>
        <Link href={linkSrc}>{linkText}</Link>
      </LinkContainer>
    </Container>
  )
}

InfoCard.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  linkSrc: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  actionSrc: PropTypes.string.isRequired,
  conclusion: PropTypes.string.isRequired,
}
export default InfoCard
