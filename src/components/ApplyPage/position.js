import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import Section from "styles/components/Section"

const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
  padding-bottom: 50px;
  min-height: 20vh;
  height: 20em;
  display: flex;
  flex-direction: column;
  font-size: 1.25em;
  padding: 2em 2em;

  @media (min-width: 1000px) {
    height: 15em;
  }
`
const Description = styled.span`
  padding-top: 1em;
`

const Button = styled(Link)`
  letter-spacing: 0.15em;
  width: fit-content;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.5em;
  font-weight: 500;
  border-bottom: 2px solid white;
  color: ${SB_SALMON};
  transition: color 0.3s, text-shadow 0.3s, border-bottom 0.3s;
  &:hover {
    border-bottom: 2px solid ${SB_ORANGE};
  }
`

const Position = ({ fields, frontmatter }) => (
  <BlueFontSection>
    <Button to={fields.slug}>{frontmatter.role}</Button>
    <Description>{frontmatter.description}</Description>
  </BlueFontSection>
)

Position.propTypes = {
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Position
