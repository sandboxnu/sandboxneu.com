import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"

import Values from "../components/ApplyPage/values"
import Testimonial from "../components/ApplyPage/testimonial"
import Showcase from "../components/ApplyPage/showcase"
import Position from "../components/ApplyPage/position"
import Heading from "../components/ApplyPage/heading"
import Layout from "components/layout"
import SEO from "components/seo"

const Header = styled.h1`
  font-style: italic;
  font-stretch: expanded;
  letter-spacing: 0.15em;
  text-align: center;
  font-weight: 600;
  font-size: 2em;
  color: ${SB_NAVY};
  text-transform: uppercase;

  @media (min-width: 1000px) {
    font-size: 3em;
    margin-bottom: 1em;
  }
`

const ParagraphContainer = styled.div`
  padding-bottom: 20vh;
  @media (min-width: 1000px) {
    grid-auto-flow: column;
    grid-column-gap: 100px;
    grid-auto-columns: 1fr;
    padding-bottom: 5vh;
  }
`

const Container = styled.div`
  margin: 0 auto;
  padding 0em 5em;
`

const SectionLine = styled.span`
  color: ${SB_ORANGE};
  border-top: 3px solid;
  margin-top: 1em;
  margin-bottom: 1em;
  display: grid;
  content: none;
  margin-left: 8em;
  margin-right: 8em;

  @media (min-width: 1000px) {
    margin-left: 13em;
    margin-right: 13em;
  }
`

const ApplyPage = ({ data }) => {
  const positions = data.positions.edges.map(edge => (
    <Position {...edge.node} />
  ))
  return (
    <Layout page="apply">
      <SEO title="Apply" keywords={[`application`]} />
      <Heading {...data.apply.edges[0].node} />
      <Container>
        <Values {...data.values.edges[0].node} />
        <SectionLine />
        <Showcase />
        <SectionLine />
        <Header id="open-positions">Open Positions</Header>
        <ParagraphContainer>{positions}</ParagraphContainer>
      </Container>
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
          applicationStatus
        }
      }
    }
    values: allMissionJson {
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
          }
        }
      }
    }
  }
`

export default ApplyPage
