import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Who from "../components/who"
import Mission from "../components/mission"
import Builds from "../components/builds"

const IndexPage = ({data}) => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
    />
    <Hero data={data.hero.edges}/>
    <Who />
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
            background{
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
  }
`

export default IndexPage
