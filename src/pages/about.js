import React, { useEffect, useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "components/PageLayout/layout"
import FAQs from "components/faqs"
import Values from "components/AboutPage/values"
import GetInvolved from "components/AboutPage/getInvolved"
import Banner from "styles/components/Banner"

import { SB_SALMON_RGBA, SB_ORANGE } from "@colors"

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

const TextContainer = styled.div`
  margin: 0 5em;
  text-align: left;
  padding: 1em 5em;
  z-index: 5;

  @media (max-width: 1000px) {
    margin: 0;
  }

  @media (max-width: 600px) {
    line-height: 22px;
    margin: 0;
    padding: 30px 50px;
  }
`

const QuoteContainer = styled.span`
  color: ${SB_SALMON_RGBA(0.75)};
  font-family: Arial;
  font-size: 180px;
  position: absolute;
  left: 1em;
  margin-top: -0.2em;

  @media (max-width: 1000px) {
    left: 0.3em;
    margin-top: 0;
    top: 13em;
  }

  @media (max-width: 600px) {
    visibility: hidden;
  }
`

const Text = styled.span`
  color: #fff;
  font-weight: 400;
  font-size: 20px;
  font-style: italic;
  font-family: Montserrat;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

const SpecialText = styled.span`
  color: ${SB_ORANGE};
  font-weight: 600;
  font-size: 20px;
  font-family: Montserrat;

  @media (max-width: 600px) {
    font-size: 18px;
  }
`

const Reference = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`

const ReferenceName = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  font-style: normal;
`

const ReferenceTitle = styled.span`
  color: #fff;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  margin-top: -10px;
`

const AboutPage = ({ data }) => {
  return (
    <Layout page="about">
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
            <ReferenceName>Dr. Melnikoff Researcher</ReferenceName>
            <ReferenceTitle>Researcher</ReferenceTitle>
          </Reference>
        </TextContainer>
      </Banner>
      <FAQs {...data.faqs.edges[0].node} />
      <Banner>
        <JoinBannerContent>
          <div>JOIN OUR TEAM</div>
          <span>
            subscribe to our newsletter to be notified when application open for
            spring 2021
          </span>
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
