import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"
import Section from "styles/components/Section"
import Body from "styles/components/Body"

const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  font-size: 1.25em;
  padding: 1em 2em;

  @media (min-width: 1000px) {
    height: 15em;
  }
`
const Description = styled(Body)`
  padding-top: 1em;
  margin-bottom: 1em;

  @media (min-width: 1000px) {
    height: 15em;
    margin-bottom: 0em;
  }
`

const ApplyButton = styled(Link)`
  width: fit-content;
  text-decoration: none;
  font-weight: 500;
  border-bottom: 2px solid white;
  color: ${SB_NAVY};
  transition: color 0.3s, text-shadow 0.3s, border-bottom 0.3s;

  &:hover {
    border-bottom: 2px solid ${SB_NAVY};
  }
`
const Header = styled.h2`
  letter-spacing: 0.15em;
  width: fit-content;
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: 500;
  margin: 0;
  margin-right: 15px;
  color: ${SB_SALMON};
`

const HeadingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Position = ({ fields, frontmatter }) => (
  <BlueFontSection>
    <HeadingContainer>
      <Header>{frontmatter.role}</Header>
    </HeadingContainer>
    <Description>
      {frontmatter.description}
      <ApplyButton to={fields.slug}> Click here to read more.</ApplyButton>
    </Description>
  </BlueFontSection>
)

Position.propTypes = {
  role: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
}

export default Position