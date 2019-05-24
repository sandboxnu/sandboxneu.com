import React from "react"
import { graphql } from "gatsby"

import Builds from "components/IndexPage/builds"
import Hero from "components/IndexPage/hero"
import Layout from "components/layout"
import Mission from "components/IndexPage/mission"
import Who from "components/IndexPage/who"
import SEO from "components/seo"
import Testimonial from "components/IndexPage/testimonial"

const IndexPage = ({ data }) => {
  return (
    <Layout page="index">
      <SEO
        title="Home"
        keywords={[`sandbox`, `neu`, `northeastern`, `university`]}
      />
      <Hero {...data.hero.edges[0].node} />
      <Who {...data.who.edges[0].node} />
      <Mission {...data.mission.edges[0].node} />
      <Builds {...data.builds.edges[0].node} />
      <Testimonial
        quote={data.testimonial.edges[0].node.html}
        {...data.testimonial.edges[0].node.frontmatter}
      />
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
          projects {
            title
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            description
            gitLink
          }
        }
      }
    }
    testimonial: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/testimonial/" } }
    ) {
      edges {
        node {
          html
          frontmatter {
            role
            author
            email
            form
          }
        }
      }
    }
  }
`

export default IndexPage
