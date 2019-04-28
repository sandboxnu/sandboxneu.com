import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Who from "../components/who"
import Mission from "../components/mission"
import Builds from "../components/builds"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
      />
      <Hero {...data.hero.edges[0].node} />
      <Who {...data.who.edges[0].node} />
      <Mission {...data.mission.edges[0].node} />
      <Builds />
    </Layout>
  )
}

export const query = graphql`
  query IndexQuery {
    hero: allHeroJson {
      edges {
        node {
          title
          background {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    who: allWhoJson {
      edges {
        node {
          title1
          p1
          title2
          p2
          img1 {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img2 {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          img3 {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    mission: allMissionJson {
      edges {
        node {
          title
          principles {
            title
            body
          }
        }
      }
    }
    builds: allBuildsJson {
      edges {
        node {
          title
        }
      }
    }
  }
`

export default IndexPage
