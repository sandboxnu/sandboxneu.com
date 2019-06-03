import React from "react"
import { graphql } from "gatsby"

import Layout from "components/layout"
import SEO from "components/seo"
import TeamPhotos from "components/teamPhotos"

const TeamPage = ({ data }) => {
  return (
    <Layout page="team">
      <SEO
        title="Team"
        keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
      />
      <TeamPhotos members={data.allTeamJson.edges[0].node.members} />
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
