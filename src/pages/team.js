import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import { SB_NAVY } from "@colors"
import Layout from "components/layout"
import SEO from "components/seo"
import TeamPhotos from "components/teamPhotos"
import Section from "styles/components/Section"

const BlueFontSection = styled(Section)`
  color: ${SB_NAVY};
`

const Header = styled.h1`
  font-style: italic;
  font-stretch: expanded;
  /* letter-spacing: 0.15em; */
  text-align: center;
  font-weight: 600;
  font-size: 2.5em;

  @media (min-width: 1000px) {
    font-size: 3em;
  }
`

const Subtitle = styled.h3`
  text-align: center;
  font-weight: 400;
  line-height: 1.5;

  @media (min-width: 1000px) {
    font-size: 1.5em;
  }
`

const TeamPage = ({ data }) => {
  return (
    <Layout page="team">
      <SEO title="Team" keywords={[`team`, `members`]} />
      <BlueFontSection>
        <Header>OUR TEAM</Header>
        <Subtitle>Meet the people who make Sandbox outstanding.</Subtitle>
        <TeamPhotos members={data.allTeamJson.edges[0].node.members} />
      </BlueFontSection>
    </Layout>
  )
}

export const profileIcon = graphql`
  fragment profileIcon on File {
    childImageSharp {
      fixed(width: 150, height: 150, quality: 90) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

export const query = graphql`
  query TeamQuery {
    allTeamJson {
      edges {
        node {
          members {
            name
            team {
              name
              role
            }
            profileImage {
              ...profileIcon
            }
            socialMedia {
              email
              linkedIn
              portfolio
            }
          }
        }
      }
    }
  }
`

export default TeamPage
