import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { OASIS_GREEN, SB_NAVY, SB_ORANGE, lightenDarkenColor } from "@colors"
import PositionButton from "components/ApplyPage/positionbutton"
import Section from "styles/components/Section"
import Body from "styles/components/Body"
import { SB_SALMON } from "../../styles/colors"

const PositionSection = styled(Section)`
  display: block;
  padding: 2em;
  margin-bottom: 60px;
  margin-right: 0;
  max-width: 100%;

  @media (min-width: 1000px) {
    margin-bottom: 20px;
    margin-right: 56px;
  }
`

const Description = styled(Body)`
  color: #FFFFFF !important;
  padding-top: 1em;
  font-size: 20px;
  padding-bottom: 2em;

  @media (min-width: 1000px) {
    padding-right: 56px;
  }
`

const Header = styled.h2`
  text-transform: uppercase;
  font-size: 1.7em;
  font-weight: 600;
  margin: 0;
  color: #FFFFFF;
  font-family: Montserrat;
  font-style: italic;

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

const ApplyButton = styled(Link)`
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

const Position = ({ fields, frontmatter }) => {
  const [background, setBackground] = React.useState(SB_NAVY)

  React.useEffect(() => {
    const role = frontmatter.role.toLowerCase();
    if (role.includes('developer')) {
      setBackground(SB_NAVY)
    } else if (role.includes('designer')) {
      setBackground(SB_SALMON)
    } else if (role.includes('oasis')) {
      setBackground(OASIS_GREEN)
    } 
  }, []);

  return (
    <PositionSection style={{background: background}}>
      <HeadingContainer>
        <Header>{frontmatter.role}</Header>
        {frontmatter.isOpen && <ApplyButton to={fields.slug}>Apply</ApplyButton>}
      </HeadingContainer>
      <Description>
        {frontmatter.description}
      </Description>
      <PositionButton
        background={background}
        name="Learn more"
        route={fields.slug}>
      ></PositionButton>
    </PositionSection>
  )
}

export default Position
