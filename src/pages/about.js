import React from "react"
import { graphql } from "gatsby"

import Layout from "components/PageLayout/layout"
import FAQs from "components/faqs"

const AboutPage = ({ data }) => {
  return (
    <Layout page="about">
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
  }
`
export default AboutPage
