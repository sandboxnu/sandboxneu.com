import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/PageLayout/layout"
import FAQs from "components/faqs"
import Values from "components/AboutPage/values"
import GetInvolved from "components/AboutPage/getInvolved"
import Banner from "styles/components/Banner"
import {
  QuoteContainer,
  TextContainer,
  Text,
  SpecialText,
  Reference,
  ReferenceName,
  ReferenceTitle,
} from "components/quote"
import SEO from "../components/seo"

const JoinBannerContent = styled.div`
  & > div {
    line-height: 25px;
  }
  & > span {
    font-family: Andale Mono, monospace;
    font-size: 15px;
    line-height: 16px;
  }
`

const AboutPage = ({ data }) => {
  return (
    <Layout page="about">
      <SEO title="About" keywords={[`values`, `faq`]} />
      <Values {...data.values.edges[0].node} />
      <GetInvolved {...data.getInvolved.edges[0].node} />
      <Banner>
        <QuoteContainer>“</QuoteContainer>
        <TextContainer>
          <Text>
            The brilliant and diligent engineers of Sandbox are, without
            exaggeration,{" "}
            <SpecialText>indispensable to my research</SpecialText>. I came to
            them with a challenging problem, and they delivered a solution that
            is <SpecialText>twice as professional as I’d hoped</SpecialText>, in
            half the time I’d expected.
          </Text>
          <Reference>
            <ReferenceName>Dr. Melnikoff</ReferenceName>
            <ReferenceTitle>Researcher</ReferenceTitle>
          </Reference>
        </TextContainer>
      </Banner>
      <FAQs {...data.faqs.edges[0].node} />
      <Banner>
        <JoinBannerContent>
          <div>JOIN OUR TEAM</div>
          <span>Applications for Fall 2025 are now open!</span>
        </JoinBannerContent>
      </Banner>
    </Layout>
  )
}

export const query = graphql`
  query AboutQuery {
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
    values: allValuesJson {
      edges {
        node {
          header
          principles {
            title
            body
          }
        }
      }
    }
    getInvolved: allGetInvolvedCardsJson {
      edges {
        node {
          header
          info {
            title
            linkText
            linkSrc
            body
            action
            actionSrc
            conclusion
          }
        }
      }
    }
  }
`
export default AboutPage
