import React from "react"
import { graphql } from "gatsby"

import ApplyPageIntroduction from "../components/ApplyPage/introduction"
import Positions from "../components/ApplyPage/positions"
import Position from "../components/ApplyPage/position"
import Values from "../components/ApplyPage/values"
import Layout from "../components/PageLayout/layout"
import Quote from "components/ApplyPage/quote"
import SEO from "components/seo"
import HowSandboxRecruits from "../components/ApplyPage/howSandboxRecruits"

const ApplyPage = ({ data }) => {
  const {
    title, 
    subtitle, 
    quote, 
    quoteReference, 
    applicationStatus, 
    isBannerVisible
  } = data.apply.edges[0].node;

  const [positions, setPositions] = React.useState();

  React.useEffect(() => {
    setPositions(data.positions.edges
      .map((e) => e.node)
      .filter((node) => node.frontmatter.isVisible)
      .sort((a, b) => (a.frontmatter.isOpen ? -1 : 1)) // put open positions on top
      .map((node) => <Position {...node} />))
  }, []);

  return (
    <Layout page="apply">
      <SEO title="Apply" keywords={[`application`]} />
      <ApplyPageIntroduction 
        title={title} 
        subtitle={subtitle} 
        applicationStatus={applicationStatus} 
        isBannerVisible />
      <Quote text={quote} reference={quoteReference} />
      <Values {...data.values.edges[0].node} />
      <Positions positions={positions}/>
      <HowSandboxRecruits />
    </Layout>
  )
}

export const pageQuery = graphql`
  query ApplyPageQuery {
    apply: allApplyJson {
      edges {
        node {
          title
          subtitle
          quote
          quoteReference
          applicationStatus
          isBannerVisible
        }
      }
    }
    values: allValuesJson {
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
    positions: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/apply/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            role
            description
            isVisible
            isOpen
            openDate
          }
        }
      }
    }
  }
`

export default ApplyPage
