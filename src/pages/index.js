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
import Banner from "styles/components/Banner"

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

const IndexPage = ({ data }) => {
  return (
    <Layout page="index">
      <SEO />
      <Hero {...data.hero.edges[0].node} />
      <Who {...data.who.edges[0].node} />
      <Banner>
        UNLEASH THE POWER OF SOFTWARE FOR RESEARCHERS AND STUDENTS.
      </Banner>
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
