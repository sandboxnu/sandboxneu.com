import React from "react"
import PropTypes from "prop-types"
import styled, { css } from "styled-components"
import { Link } from "gatsby"

import { SB_SALMON, SB_NAVY, SB_ORANGE, lightenDarkenColor } from "@colors"
import Section from "styles/components/Section"
import Body from "styles/components/Body"

const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
  display: block;
  font-size: 20px;
  padding: 1em 2em;

  @media (min-width: 1000px) {
    height: 15em;
  }
`
const Description = styled(Body)`
  padding-top: 1em;
  margin-bottom: 1em;
  font-size: 20px;

  @media (min-width: 1000px) {
    height: 15em;
    margin-bottom: 0em;
  }
`

const ReadMore = styled(Link)`
  width: fit-content;
  border-bottom: 2px solid white;
  color: ${SB_NAVY};
  display: block;
  text-decoration: underline;
  font-weight: 600;
  margin-top: 0.5em;
  font-size: 20px;
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
  font-family: Montserrat;

  @media (max-width: 600px) {
    font-size: 24px;
  }
`

const HeadingContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 660px) {
    display: block;
  }
`

const Button = styled(Link)`
  background-color: ${SB_ORANGE};
  transition: background-color 0.3s;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.15em;
  cursor: pointer;
  display: inline-block;
  text-align: center;

  font-stretch: expanded;
  font-style: italic;
  font-size: 1em;
  font-weight: 600;
  color: white;
  padding: 7px 25px;
  margin-bottom: 1em;
  margin-left: 2em;

  &:hover {
    background-color: ${lightenDarkenColor(SB_ORANGE, 20)};
  }

  @media (max-width: 660px) {
    margin-top: 1em;
    margin-left: 0em;
    margin-bottom: 0em;
  }

  @media (min-width: 1000px) {
    margin-bottom: 0px;
  }
`

const Position = ({ fields, frontmatter }) => (
  <BlueFontSection>
    <HeadingContainer>
      <Header>{frontmatter.role}</Header>
      {frontmatter.isOpen && <Button to={fields.slug}>Apply</Button>}
    </HeadingContainer>
    <Description>
      {frontmatter.description}
      <ReadMore to={fields.slug}> Click here to read more.</ReadMore>
    </Description>
  </BlueFontSection>
)

export default Position
