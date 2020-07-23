import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Hero from "components/IndexPage/hero"
import Layout from "components/PageLayout/layout"
import Values from "components/IndexPage/values"
import Who from "components/IndexPage/who"
import SEO from "components/seo"
import Marketing from "components/IndexPage/marketing"
import Testimonial from "components/IndexPage/testimonial"
import FAQs from "components/faqs"
import EmailSubscription from "../components/emailSubscription"
import Banner from "styles/components/Banner"
import Card from "components/card"
import { SB_ORANGE, SB_SALMON } from "@colors"

const JoinBannerContent = styled.div`
  & > div {
    line-height: 25px;
  }
  & > span {
    font-family: Andale Mono, monospace;
    font-size: 15px;
    line-height: 16px;
    font-weight: normal;
    font-style: normal;
  }
`
const EmailBannerContent = styled.div`
  //TO-DO: Styles when email component added
`

const CardLayout = styled.div`
  // Use grid for this
  padding: 60px;
  display: flex;
  flex-direction: column;
  & div {
    margin-bottom: 200px;
  }
`
const Test = styled.div`
  width: 100%;
  height: 100%;
  color: green;
`

const IndexPage = ({ data }) => {
  return (
    <Layout page="index">
      <SEO />
      <Hero {...data.hero.edges[0].node} />
      <Marketing {...data.marketing.edges[0].node} />
      <EmailSubscription />
      <Who {...data.who.edges[0].node} />
      <Banner>
        UNLEASH THE POWER OF SOFTWARE FOR RESEARCHERS AND STUDENTS.
      </Banner>
      <CardLayout>
        <Card
          color={SB_SALMON}
          linkSrc={"mailto:info@sandboxneu.com"}
          linkText={"work with us >"}
          title={"WORK WITH US"}
          isSpotlight={false}
        >
          <Test>I love Bugsnax. Bugsnax is my favorite game</Test>
        </Card>
        <Card
          color={SB_ORANGE}
          linkSrc={"https://oasis.sandboxnu.com/"}
          linkText={"learn more about oasis >"}
          title={"OASIS"}
          isSpotlight={false}
        />
      </CardLayout>
      <Values {...data.values.edges[0].node} />
      <Banner>
        <EmailBannerContent>
          <span>DID WE PIQUE YOUR INTEREST?</span>
        </EmailBannerContent>
      </Banner>
      <FAQs {...data.faqs.edges[0].node} />
      <Banner>
        <JoinBannerContent>
          <div>JOIN OUR TEAM</div>
          <span>applications open through January 15th</span>
        </JoinBannerContent>
      </Banner>
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
    marketing: allMarketingJson {
      edges {
        node {
          event {
            date
            time
            location
            title
          }
          post {
            title
            author
            url
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
    faqs: allFaqsJson {
      edges {
        node {
          faqs {
            question
            answer
          }
        }
      }
    }
  }
`

export default IndexPage
