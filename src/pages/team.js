import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/layout"
import SEO from "components/seo"
import TeamPhotos from "components/teamPhotos"
import Section from "styles/Section"

const Header = styled.h1`
  letter-spacing: 0.15em;
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
      <SEO
        title="Team"
        keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
      />
      <Section>
        <Header>OUR TEAM</Header>
        <Subtitle>Meet the people who make Sandbox outstanding.</Subtitle>
        <TeamPhotos members={data.allTeamJson.edges[0].node.members} />
      </Section>
    </Layout>
  )
}

export const profileIcon = graphql`
  fragment profileIcon on File {
    childImageSharp {
      fixed(width: 150, height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`

/*
FIXME there has got to be a better way to do this, but I don't have
the time right now to figure out what that is
*/
export const query = graphql`
  query TeamQuery {
    allTeamJson {
      edges {
        node {
          members {
            name
            role
            profileImage {
              ...profileIcon
            }
          }
        }
      }
    }
  }
`

export default TeamPage
