import React from "react"
import { graphql } from "gatsby"

import Layout from "components/PageLayout/layout"
import FAQs from "components/faqs"
import Values from "components/AboutPage/values"
import GetInvolved from "components/AboutPage/getInvolved"

const AboutPage = ({ data }) => {
  return (
    <Layout page="about">
      <Values {...data.values.edges[0].node} />
      <GetInvolved {...data.getInvolved.edges[0].node} />
      <FAQs {...data.faqs.edges[0].node} />
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
