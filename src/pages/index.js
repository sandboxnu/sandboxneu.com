import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Who from "../components/who"
import Mission from "../components/mission"
import Builds from "../components/builds"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
    />
    <Hero {...data.hero.edges[0].node} />
    <Who {...data.who.edges[0].node} />
    <Mission />
    <Builds />
  </Layout>
)

export const query = graphql`
  query IndexQuery {
    hero: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/hero/" } }) {
      edges {
        node {
          frontmatter {
            title
            background {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
    who: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/who/" } }) {
      edges {
        node {
          frontmatter {
            title1
            p1
            title2
            p2
            img1 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            img2 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            img3 {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          html
        }
      }
    }
    mission: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/mission/" } }
    ) {
      edges {
        node {
          frontmatter {
            title
          }
          html
        }
      }
    }
  }
`

export default IndexPage
