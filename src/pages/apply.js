import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import { SB_SALMON, SB_NAVY, SB_ORANGE } from "@colors"

import Values from "../components/ApplyPage/values"
import Showcase from "../components/ApplyPage/showcase"
import Position from "../components/ApplyPage/position"
import Heading from "../components/ApplyPage/heading"
import Layout from "../components/PageLayout/layout"
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
    margin-top: 70px;
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
padding: 0em 1em;
margin-top: 3em;
@media (min-width: 1000px) {
  padding: 0em 5em;
  text-align: center:
}  
`

const SectionLine = styled.span`
  color: ${SB_ORANGE};
  border-top: 3px solid;
  display: block;
  text-align: center;
  content: none;
  width: 500px;
  margin: 0 auto;

  @media (max-width: 650px) {
    display: none;
  }

  @media (min-width: 1000px) {
    width: 800px;
  }

  @media (min-width: 1160px) {
    width: 1000px;
    min-width: 850px;
  }
`

const ApplyPage = ({ data }) => {
  const positions = data.positions.edges
    .map(e => e.node)
    .filter(node => node.frontmatter.isVisible)
    .sort((a, b) => (a.frontmatter.isOpen ? -1 : 1)) // put open positions on top
    .map(node => <Position {...node} />)
  return (
    <Layout page="apply">
      <SEO title="Apply" keywords={[`application`]} />
      <Heading {...data.apply.edges[0].node} />
      <Container>
        <SectionLine />
        <Values {...data.values.edges[0].node} />
        <SectionLine />
        <Header>Semester Highlights</Header>
        <Showcase />
        <SectionLine />
        <Header id="open-positions">Positions</Header>
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
