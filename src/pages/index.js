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
  }
`
const EmailBannerContent = styled.div`
  //TO-DO: Styles when email component added
`

const CardLayout = styled.div`
  padding: 60px;
  display: flex;
  justify-content: flex-end;
`
const CardsLeft = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  & > div:first-child {
    margin-bottom: 72px;
  }
`
const CardsRight = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  & > div:first-child {
    margin-bottom: 72px;
  }
`
const WorkWithUs = styled.div`
  font-family: Open Sans;
  font-size: 15px;
  line-height: 20px;
  display: inline-block;
  margin: 70px 20px 60px 20px;
  width: 490px;
`
const JoinTheTeam = styled.div`
  line-height: 20px;
  display: flex;
  margin: 50px 20px 50px 20px;
  width: fit-content;
`
const JoinTheTeamText = styled.div`
  font-family: Open Sans;
  font-size: 15px;
  margin-right: 24px;
  width: 325px;
`
const JoinTheTeamImage = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > div {
    border-radius: 50%;
    height: 108px;
    width: 108px;
    background: green;
    margin-bottom: 16px;
  }
  & > span {
    white-space: nowrap;
    font-family: Open Sans;
    font-size: 10px;
  }
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
        <CardsLeft>
          <Card
            color={SB_SALMON}
            linkSrc={"mailto:info@sandboxneu.com"}
            linkText={"work with us >"}
            title={"WORK WITH US"}
            titleAlign={"left"}
            isSpotlight={false}
          >
            <WorkWithUs>
              {data.infoCards.edges[0].node.cards[0].copy}
            </WorkWithUs>
          </Card>
          <Card
            color={SB_SALMON}
            linkSrc={"/apply"}
            linkText={"apply here >"}
            title={"JOIN THE TEAM"}
            titleAlign={"left"}
            isSpotlight={false}
          >
            <JoinTheTeam>
              <JoinTheTeamText>
                {data.infoCards.edges[0].node.cards[1].copy}
              </JoinTheTeamText>
              <JoinTheTeamImage>
                <div>
                  <img />
                </div>
                <span>{"Jane Doe, Sandbox developer"}</span>
              </JoinTheTeamImage>
            </JoinTheTeam>
          </Card>
        </CardsLeft>
        <CardsRight>
          <Card
            color={SB_ORANGE}
            linkSrc={"https://oasis.sandboxnu.com/"}
            linkText={"learn more about oasis >"}
            title={"OASIS"}
            titleAlign={"right"}
            isSpotlight={false}
          >
            {data.infoCards.edges[0].node.cards[2].copy}
          </Card>
          <Card
            color={SB_ORANGE}
            linkSrc={"/portfolio"}
            linkText={"work with us >"}
            title={"PHARMD TRACKER"}
            titleAlign={"right"}
            isSpotlight={true}
          >
            {data.infoCards.edges[0].node.cards[3].copy}
          </Card>
        </CardsRight>
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
    infoCards: allInfoCardsJson {
      edges {
        node {
          cards {
            copy
          }
        }
      }
    }
  }
`

export default IndexPage
